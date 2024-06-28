import { Server as SocketIOServer, Socket } from "socket.io";
import { Server as HTTPServer } from "http";
import { Chat } from "../infrastructure/database/mongodb/models";
import { updateLastSeen } from "../infrastructure/database/mongodb/repositories";

let onlineUsers = new Map<string, string>(); 
let onlineUsersList: { userId: string; socketId: string }[] = []; 

export const socket =  (server: HTTPServer) => {
    const io = new SocketIOServer(server, {
        cors: {
            origin: process.env.FRONTEND_URL || "*",
        },
    });

    io.on("connection", (socket: Socket) => {

        console.log("Socket connected", socket.id);

        socket.on("new-user", (userId: string) => {

            console.log(userId,"new-user---->");
            
            
            onlineUsers.set(userId, socket.id);

            const existingUserIndex = onlineUsersList.findIndex(user => user.userId === userId);
            if (existingUserIndex === -1) {
                onlineUsersList.push({ userId, socketId: socket.id });
            } else {
                onlineUsersList[existingUserIndex].socketId = socket.id;
            }
            console.log("online-users",onlineUsersList);
            
            io.emit("online-users", onlineUsersList);
        });

        socket.on("join-room", (roomId: string) => {
            socket.join(roomId);
            console.log("joinded to roomid :  ", roomId  );
            
        });

        socket.on("send-message", (messageData: any) => {
            console.log(messageData.roomId,"message roomid");
            
            io.to(messageData.roomId).emit("receive-message", {
                ...messageData,
                createdAt: new Date().toISOString()
            });
        });

        socket.on("typing", ({ roomId, senderId }) => {
            console.log("typing",roomId,"---->",senderId);
            
            io.to(roomId).emit("isTyping",  senderId);
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
                onlineUsersList = onlineUsersList.filter(user => user.socketId !== socket.id);
                io.emit("online-users", onlineUsersList);


                //update last seen
                await updateLastSeen(disconnectedUserId)

              
                
            }
        });
    });

    io.on("error", (error: any) => {
        console.error("Socket.IO error:", error);
    });

    return io;
};
