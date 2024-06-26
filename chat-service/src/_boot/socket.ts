import { Server as SocketIOServer, Socket } from "socket.io";
import { Server as HTTPServer } from "http";

let onlineUsers = new Map<string, string>(); // Map to store userId -> socketId
let onlineUsersList: { userId: string; socketId: string }[] = []; // Array to store { userId, socketId } pairs

export const socket = (server: HTTPServer) => {
    const io = new SocketIOServer(server, {
        cors: {
            origin: process.env.FRONTEND_URL || "*",
        },
    });

    io.on("connection", (socket: Socket) => {
        console.log("Socket connected", socket.id);

        socket.on("new-user", (userId: string) => {
            console.log("Received new user:", userId);

            onlineUsers.set(userId, socket.id);

            const existingUserIndex = onlineUsersList.findIndex(user => user.userId === userId);
            if (existingUserIndex === -1) {

                onlineUsersList.push({ userId, socketId: socket.id });
            } else {
                onlineUsersList[existingUserIndex].socketId = socket.id;
            }

            io.emit("online-users", onlineUsersList);

            console.log("Current online users:", onlineUsersList);
        });


        socket.on("join-room",(roomId: string)=>{
            socket.join(roomId)
            console.log("joined in room");
            
        })

        socket.on("send-message",(messageData: any) => {
            console.log(messageData,"messagedata");
            io.to(messageData.roomId).emit("receive-message",messageData)
        })

        // Handle user disconnection
        socket.on("disconnect", () => {
            console.log("Socket disconnected", socket.id);


            let disconnectedUserId: string | undefined;
            for (const [userId, socketId] of onlineUsers) {
                if (socketId === socket.id) {
                    disconnectedUserId = userId;
                    break;
                }
            }

            // Remove user from onlineUsers Map
            if (disconnectedUserId) {
                onlineUsers.delete(disconnectedUserId);

                // Remove user from onlineUsersList Array
                onlineUsersList = onlineUsersList.filter(user => user.socketId !== socket.id);

                // Emit updated onlineUsersList to all clients
                io.emit("online-users", onlineUsersList);

                console.log("Current online users:", onlineUsersList);
            }
        });
    });

    io.on("error", (error: any) => {
        console.error("Socket.IO error:", error);
    });

    return io;
};
