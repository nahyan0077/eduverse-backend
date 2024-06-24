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
// import { routes } from '../infrastructure/routes';
// import { dependancies } from '../_boot/dependancies';
// import errorHandler from '../_lib/common/error/errorhandler';

config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Routes

// Home route
app.get("/test", (req: Request, res: Response) => {
	res.status(200).json({
		message: "Chat service ON!",
	});
});

// app.use('/', routes(dependancies));

// Not found handler
app.all("*", (req: Request, res: Response) => {
	res
		.status(404)
		.json({ success: false, status: 404, message: "API Not found" });
});

// app.use(errorHandler)





export default app;
