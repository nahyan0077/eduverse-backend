import express, { Request, Response, NextFunction, Application } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { routes } from "../infrastructure/routes";
import { dependancies } from "../_boot/dependancies";
import errorHandler from "../_lib/common/error/errorhandler";
import morgan from "morgan";
import PDFDocument from "pdfkit";
import {
  findUserById,
  getCourseById,
} from "../infrastructure/database/mongodb/repositories";
import path from "path";
import { generateCertificate } from "../infrastructure/services/generateCertificate";

config();

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 7001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

//test route
app.get("api/course/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: `${process.env.SERVICE} ON!`,
  });
});

app.get("/api/course/generate-certificate", generateCertificate);

app.use("/api/course", routes(dependancies));
// app.use("/", routes(dependancies));

app.use("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ success: false, status: 404, message: "Api Not found---->course" });
});

app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => {
    console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
  });
};

export default { start };
