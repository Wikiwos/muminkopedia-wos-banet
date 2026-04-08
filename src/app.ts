import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.json({ message: "API Muminkopedii działa! 🌲" });
});

export default app;