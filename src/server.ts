// Ten plik zajmuje się utworzeniem serwera http

import app from './app';
import { connectDB, createCollections, seedDatabase } from "./db";

// użyj portu podanego w .env, czyli 5000
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

startServer()

// wciśnięcie ctrl+z powoduje zapauzowanie procesu, co powoduje zawieszenie nodejs i wymuszenia ręcznego zakończenia procesu.
// zamiast tego można ustawić to co robi ctrl+c (czyli zwykłe zakończenie procesu) również na ctrl+z, co temu zapobiegnie:
process.on('SIGTSTP', () => {
    process.exit(1)
})