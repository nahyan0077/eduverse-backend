import express, { Application, Request, Response } from 'express'
import helmet from 'helmet';
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'

config()


const app: Application = express()
const PORT: number = Number(process.env.PORT) || 5001;

app.use(helmet())
app.use(express())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/',(req: Request,res: Response)=>{
    res.status(200).json(
        {message: "Notification server is ON!"}
    )
})




export const start = () => {
    app.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
    });
}

export default {start}