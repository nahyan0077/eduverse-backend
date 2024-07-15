import express, { Request, Response, NextFunction, Application } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { routes } from "../infrastructure/routes";
import { dependencies } from "../_boot/dependencies";
import morgan from "morgan";

config();

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 4002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

//test route
app.get("/api/payment/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Payment service ON!",
  });
});

app.use("/api/payment", routes(dependencies));

app.use("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ success: false, status: 404, message: "Api Not found--->payment" });
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
  });
};

export default { start };
