import express, { Request, Response, NextFunction, Application } from 'express'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'
import morgan from 'morgan'

config()


const app: Application = express()

const PORT: number = Number(process.env.PORT) || 6001


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(morgan("dev"))

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "User service ON!"
    })
});


app.use("*",(req: Request, res: Response) => {
    res.status(404).json({ success: false, status: 404, message: "Api Not found" });
  });  


  
const start = () => {
    app.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
    })
}

export default { start }