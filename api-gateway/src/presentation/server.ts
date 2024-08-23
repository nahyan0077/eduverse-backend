import express, { Request, Response, NextFunction, Application } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";
import helmet from 'helmet'
// import { limiter } from "../_lib/rateLimitter/rateLImitter";

// Load environment-specific variables
if (process.env.NODE_ENV === "production") {
  config({ path: "./.env.production" });
} else {
  config({ path: "./.env.local" });
}

console.log(process.env.FRONTEND_URL,"========api========");

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 2001;

const corsOptions = {
  origin: String(process.env.FRONTEND_URL),
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
// app.use(limiter)
app.use(helmet())

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Auth service ON!",
  });
});

const routes = [
  {
    context: "/api/auth",
    target: String(process.env.AUTH_SERVICE),
    changeOrigin: true,
  },
  {
    context: "/api/notification",
    target: String(process.env.NOTIFICATION_SERVICE),
    changeOrigin: true,
  },
  {
    context: "/api/user",
    target: String(process.env.USER_SERVICE),
    changeOrigin: true,
  },
  {
    context: "/api/course",
    target: String(process.env.COURSE_SERVICE),
    changeOrigin: true,
  },
  {
    context: "/api/payment",
    target: String(process.env.PAYMENT_SERVICE),
    changeOrigin: true,
  },
  {
    context: "/api/chat",
    target: String(process.env.CHAT_SERVICE),
    changeOrigin: true,
  },
];

routes.forEach((route) => {
  app.use(route.context, proxy(route.target));
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
  });
};

export default { start };
