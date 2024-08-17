import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { notificationRouter } from "../infrastructure/routes";
import { dependencies } from "../_boot/dependencies";
import morgan from "morgan";
import helmet from 'helmet'
import cors from 'cors'

// Load environment-specific variables
if (process.env.NODE_ENV === "production") {
  config({ path: "./.env.production" });
} else {
  config({ path: "./.env" });
}

console.log(process.env.CLIENT_URL,"=======notification=========");

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5001;



const corsOptions = {
  origin: String(process.env.CLIENT_URL),
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};


app.use(helmet());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet())
app.use(cors(corsOptions))


//test route
app.get("/api/notification/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Notification server is ON!" });
});

// app.use("/api/notification", notificationRouter(dependencies));
app.use("/", notificationRouter(dependencies));

app.use("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({
      success: false,
      status: 404,
      message: "Api Not found--->notification",
    });
});

export const start = () => {
  app.listen(PORT, () => {
    console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
  });
};

export default { start };
