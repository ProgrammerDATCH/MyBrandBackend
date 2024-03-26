import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome To My Brand" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});