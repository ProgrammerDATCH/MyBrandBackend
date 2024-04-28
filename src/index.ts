import dotenv from 'dotenv'
dotenv.config();
import express, { Request, Response } from 'express';
import router from './routes';
import cors from 'cors';
import swaggerSetup from './middlewares/swaggerConfig';
import './database/config/database'
import requestLogger from './middlewares/requestLogger';
import bodyParser from 'body-parser';
import compression from 'compression';


const app = express();
app.use(cors());
app.use(compression());



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

app.use(requestLogger)

app.get("/", (req: Request, res: Response) => {res.json({ message: "Welcome To My Brand" }); });
app.use("/api", router)
swaggerSetup(app);
app.use((req, res, next) => { res.status(404).json({resStatus: false, resMsg: `[${req.method}] on [${req.path}] not allowed!` });});


app.listen(9090, () => { console.log("Server is running on port 9090"); });

export default app