import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { connectDB, createCollections } from "./database/db";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

async function initDatabase() {
    const db = await connectDB();
    await createCollections(db);
}

initDatabase();

export default app;