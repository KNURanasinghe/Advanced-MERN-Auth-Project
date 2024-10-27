import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./db/connectDB.js";


import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use("/api/auth", authRoutes)

app.listen(5000, () => {
    connectDB();
    console.log("Server running on port : ", PORT);
});