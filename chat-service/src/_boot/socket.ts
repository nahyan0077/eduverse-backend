import { Server as SocketIOServer, Socket } from "socket.io";
import { Server as HTTPServer } from "http";

export const socket = (server: HTTPServer) => {
    const io = new SocketIOServer(server, {
        cors: {
            origin: process.env.FRONTEND_URL || "*",
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket: Socket) => {
        console.log("Socket connected");

        socket.on("disconnect", () => {
            console.log("Socket disconnected");
        });
    });

    io.on("error", (error: any) => {
        console.error("Socket.IO error:", error);
    });

    return io;
};
