import express, { Request, Response } from 'express';
import router from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mybrand").then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log("Connectiong to database error: ", err)
})

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome To My Brand" });
});

app.listen(9090, () => {
    console.log("Server is running on port 3000");
});