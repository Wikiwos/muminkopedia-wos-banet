import app from './app';
import { connectDB, createCollections, seedDatabase } from "./db";

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