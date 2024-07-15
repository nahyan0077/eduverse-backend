import { Server as SocketIOServer, Socket } from "socket.io";
import { Server as HTTPServer } from "http";
import { Chat, Message } from "../infrastructure/database/mongodb/models";
import { updateLastSeen } from "../infrastructure/database/mongodb/repositories";

let onlineUsers = new Map<string, string>();
let onlineUsersList: { userId: string; socketId: string }[] = [];

export const socket = (server: HTTPServer) => {
	console.log(process.env.FRONTEND_URL,"frontend url------------>");
	
	const io = new SocketIOServer(server, {
		cors: {
			origin: process.env.FRONTEND_URL || "*",
		},
	});

	io.on("connection", (socket: Socket) => {

		const userId = socket.handshake.query.userid

		console.log(userId,"handshake check--------->");
		

		console.log("Socket connected", socket.id);

		socket.on("new-user", (userId: string) => {
			console.log(userId, "new-user---->");

			onlineUsers.set(userId, socket.id);

			const existingUserIndex = onlineUsersList.findIndex(
				(user) => user.userId === userId
			);
			if (existingUserIndex === -1) {
				onlineUsersList.push({ userId, socketId: socket.id });
			} else {
				onlineUsersList[existingUserIndex].socketId = socket.id;
			}
			console.log("online-users", onlineUsersList);

			io.emit("online-users", onlineUsersList);
		});

		socket.on("join-room", (roomId: string) => {
			socket.join(roomId);
			console.log("joined to roomid: ", roomId);
		});

		socket.on("send-message", async (messageData: any) => {
			console.log(messageData.roomId, "message roomid");

			io.to(messageData.roomId).emit("receive-message", {
				...messageData,
				createdAt: new Date().toISOString(),
			});
		});

		socket.on("typing", ({ roomId, senderId }) => {
			socket.to(roomId).emit("isTyping", senderId);
		});

		socket.on("delete-message", ({ messageId, roomId }: any) => {
			io.to(roomId).emit("get-delete-message", messageId);
		});

		socket.on("message-seen", async ({ roomId, chatId, userId }) => {
			// this will Find all previous unseen messages and update them

			const messages = await Message.find({ chatId, receiverSeen: false }).sort(
				{ createdAt: 1 }
			);

			for (const msg of messages) {
				await Message.updateMany(
					{ _id: msg._id },
					{ $set: { receiverSeen: true } }
				);

				io.to(roomId).emit("message-seen-update", {
					messageId: msg._id,
					userId,
				});
			}
		});


		//video call

		socket.on("start-call",({roomId, id}) => {
			console.log(roomId,"roomid---vido call");
			console.log(id,"userid---");
			socket.to(roomId).emit("incoming-call",id)
			console.log("emitted---->",roomId);
			
		})

		socket.on("end-call", (roomId) => {
			socket.to(roomId).emit("end-call");
		});
	
		

		socket.on("disconnect", async () => {
			let disconnectedUserId: string | undefined;
			for (const [userId, socketId] of onlineUsers) {
				if (socketId === socket.id) {
					disconnectedUserId = userId;
					break;
				}
			}
			

			if (disconnectedUserId) {
				onlineUsers.delete(disconnectedUserId);
				onlineUsersList = onlineUsersList.filter(
					(user) => user.socketId !== socket.id
				);
				io.emit("online-users", onlineUsersList);

				// update last seen
				await updateLastSeen(disconnectedUserId);

				socket.emit("last-seen", disconnectedUserId);
			}
		});
	});

	io.on("error", (error: any) => {
		console.error("Socket.IO error:", error);
	});

	return io;
};
