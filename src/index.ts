import express, { Request, Response } from 'express';
import router from './routes';
import cors from 'cors';
import swaggerSetup from '../swaggerConfig';
import './database/config/database'

const app = express();
app.use(express.json());
app.use(cors());

swaggerSetup(app);

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome To My Brand" });
});

app.listen(9090, () => {
    console.log("Server is running on port 9090");
});
export default app