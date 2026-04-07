import mongoose from 'mongoose';

export const dbName = "muminkopedia";

// nawiązanie połączenia z mongoDB
export const connectDB = async (): Promise<void> => {
    try {
        // Pobieramy mongoURI z pliku .env
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error("Brak zmiennej MONGO_URI w pliku .env!");
        }

        const connection = await mongoose.connect(mongoURI);

        console.log(`⛏️ Połączono z bazą danych mongoDB '${dbName}': ${connection.connection.host}`);
    } catch (error: unknown) { // ✅ Używamy unknown, a nie any!

        if (error instanceof Error) {
            console.error(`Błąd połączenia z bazą: ${error.message}`);
        } else {
            // Przypadek brzegowy, gdy ktoś rzucił czymś innym niż obiektem Error
            console.error(`Wystąpił nieznany błąd krytyczny:`, error);
        }

        // Ubijamy proces
        process.exit(1);
    }
};


export async function createCollections(db: any) {
    const collections = await db.listCollections().toArray();
    const names = collections.map((c: any) => c.name);

    if (!names.includes("characters")) {
        await db.createCollection("characters");
    }

    if (!names.includes("locations")) {
        await db.createCollection("locations");
    }

    if (!names.includes("items")) {
        await db.createCollection("items");
    }

    if (!names.includes("relationships")) {
        await db.createCollection("relationships");
    }

    console.log("Kolekcje gotowe");
}

export async function seedDatabase(db: any) {

}