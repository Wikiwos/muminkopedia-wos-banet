// Ten plik tworzy instancję aplikacji Express oraz zajmuje się obsługą middleware itp

import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

// załadowuje dane z pliku .env
dotenv.config();

// utworzenie instancji aplikacji Express
const app = express();

// middleware-y
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

export default app;