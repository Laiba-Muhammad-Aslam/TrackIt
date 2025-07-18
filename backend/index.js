import express from "express";
import cors from 'cors';
import connectToMongoDB from "./db/db.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js"

dotenv.config();

// const corsOptions ={
//     origin: [
//         'http://localhost:5173',
//         'https://track-it-frontend-beta.vercel.app'
//     ],
//     credentials:true,            
//     optionSuccessStatus:200
// }

const app = express();
app.use(cors());
app.use(express.json())
app.use("/api/auth", authRouter);
app.use("/api/task", authRouter);

app.get("/", (req, res) => {
    res.send("Welcome to my Website");
})

app.listen(3000, () => {
    connectToMongoDB();
    console.log(`Server started`)
})

export default app;