import express, { Request, Response, NextFunction, Application } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { routes } from "../infrastructure/routes";
import { dependancies } from "../_boot/dependancies";
import errorHandler from "../_lib/common/error/errorhandler";
import morgan from "morgan";
import { generateCertificate } from "../infrastructure/services/generateCertificate";
import helmet from 'helmet'
import cors from 'cors'


//local and production env setup
if(process.env.NODE_ENV == "production"){
  config({path: './.env.production'})
}else{
  config({path: './.env.local'})
}

console.log(process.env.FRONTEND_URL,"=======course=========");


const app: Application = express();
const PORT: number = Number(process.env.PORT) || 7001;

const corsOptions = {
  origin: String(process.env.FRONTEND_URL),
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet())
app.use(cors(corsOptions))

//test route
app.get("api/course/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: `${process.env.SERVICE} ON!`,
  });
});

app.get("/api/course/generate-certificate", generateCertificate);

// app.use("/api/course", routes(dependancies));
app.use("/", routes(dependancies));

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
