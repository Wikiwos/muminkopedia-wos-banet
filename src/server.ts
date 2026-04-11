// Ten plik zajmuje się utworzeniem serwera http

import app from './app';
import { connectDB, createCollections, seedDatabase } from "./db";

// użyj portu podanego w `.env`, a jeżeli go nie ma, to użyj portu 3000
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();

        await createCollections();

        await seedDatabase();

        app.listen(PORT, () => {
            console.log(`Serwer Muminkopedii śmiga na porcie: ${PORT}`);
        });

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Krytyczny błąd podczas startu serwera: ${err.message}`);
        } else {
            console.error("Wystąpił nieznany błąd podczas startu serwera.");
        }
        process.exit(1);
    }
}

startServer();