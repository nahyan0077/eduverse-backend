import express, {
  Request,
  Response,
  Application,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import morgan from "morgan";
import { routes } from "../infrastructure/routes";
import { dependancies } from "../_boot/dependancies";
import errorHandler from "../_lib/common/error/errorhandler";
import http from "http";
import { socket } from "@/_boot/socket";
import cors from "cors";

config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4001;

// Middleware
app.use(express.json());
// app.use()
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(morgan("dev"));

// app.use(cors,)

app.use(
  cors({
    origin: "https://drop-ship.shop",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

const server = http.createServer(app);

socket(server);
// test route
app.get("/api/chat/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Chat service ON!",
  });
});

app.use("/api/chat", routes(dependancies));

// Not found handler
app.all("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ success: false, status: 404, message: "API Not found--->CHAT" });
});

app.use(errorHandler);

server.listen(process.env.PORT, () => {
  console.log(
    `The ${process.env.SERVICE} is listening on port ${process.env.PORT}`
  );
});

export default app;
