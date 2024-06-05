import express, { Request, Response, NextFunction, Application } from 'express'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'
import { routes } from '../infrastructure/routes'
import { dependancies } from '../_boot/dependancies'

config()


const app: Application = express()

const PORT: number = Number(process.env.PORT) || 7001


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: `${process.env.SERVICE} ON!`
    })
});

app.use(routes(dependancies))


app.use("*",(req: Request, res: Response) => {
    res.status(404).json({ success: false, status: 404, message: "Api Not found" });
  });  


  
const start = () => {
    app.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
    })
}

export default { start }