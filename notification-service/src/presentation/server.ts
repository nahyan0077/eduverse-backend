import express, { Application } from 'express'



const app: Application = express()
const PORT: number = Number(process.env.PORT) || 5001;



export const start = () => {
    app.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
    });
}

export default {start}