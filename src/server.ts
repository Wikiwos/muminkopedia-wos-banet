// Ten plik zajmuje się utworzeniem serwera http

import app from './app';
import {connectDB, createCollections, seedDatabase} from "./db";

// użyj portu podanego w `.env`, a jeżeli go nie ma, to użyj portu 3000
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB()
    // TODO – createCollections() i seedDatabase()

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer()
    .catch((err: unknown)=> {
        console.log(`Błąd podczas uruchamiania serwera:\n${err}`)
        process.exit(1)
    })