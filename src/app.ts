// Ten plik tworzy instancję aplikacji Express oraz zajmuje się obsługą middleware itp

import express from "express";
import cors from "cors";
import path from "path";
import fs from 'fs';
import characters from "./routes/character-routes";

// załadowuje dane z pliku .env, jeżeli on nie istnieje to informuje użytkownika
if (!fs.existsSync('.env')) {
    console.log('Plik .env nie istnieje, zatrzymywanie aplikacji...');
    process.exit(1)
} else {
    process.loadEnvFile(".env")
    console.log("Pomyślnie załadowano dane z pliku .env")
}

// utworzenie instancji aplikacji Express
const app = express();

// middleware-y
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.json({ message: "API Muminkopedii działa! 🌲" });
});

// route mounting dla Characters poprzez Router
app.use("/characters", characters)

export default app;