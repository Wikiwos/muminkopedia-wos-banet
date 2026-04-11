import mongoose from 'mongoose';
import { CharacterModel } from "./models/character-model";
import { ArtifactModel } from "./models/artifact-model";

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
        console.log(`Połączono z bazą danych mongoDB '${dbName}': ${connection.connection.host}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Błąd połączenia z bazą: ${error.message}`);
        } else {
            console.error(`Wystąpił nieznany błąd krytyczny:`, error);
        }
        process.exit(1);
    }
};

export async function createCollections() {
    const db = mongoose.connection.db;
    if (!db) return;

    const collections = await db.listCollections().toArray();
    const names = collections.map((c: any) => c.name);

    const requiredCollections = ["characters", "locations", "artifacts", "relationships"];

    for (const col of requiredCollections) {
        if (!names.includes(col)) {
            await db.createCollection(col);
        }
    }
    console.log("Kolekcje zostały sprawdzone/utworzone");
}

export async function seedDatabase() {
    try {
        const charCount = await CharacterModel.countDocuments();
        if (charCount === 0) {
            console.log("Dodaję postacie...");
            await CharacterModel.insertMany([
                { name: "Muminek", description: "Ciekawy świata i uprzejmy troll.", species: "Moomintroll", isHibernating: false },
                { name: "Włóczykij", description: "Wędrowiec, który kocha wolność i harmonijkę.", species: "Mumrik", isHibernating: false },
                { name: "Panna Migotka", description: "Lubi biżuterię i ma ładną grzywkę.", species: "Snork", isHibernating: true },
                { name: "Paszczak", description: "Kolekcjoner znaczków i entuzjasta botaniki.", species: "Hemulen", isHibernating: false }
            ]);
        }

        const artifactCount = await ArtifactModel.countDocuments();
        if (artifactCount === 0) {
            console.log("Dodaję artefakty...");
            const wloczykij = await CharacterModel.findOne({ name: "Włóczykij" });

            await ArtifactModel.insertMany([
                {
                    name: "Harmonijka ustna",
                    description: "Złota harmonijka, na której Włóczykij gra smutne piosenki.",
                    owner: wloczykij ? wloczykij.name : "Włóczykij"
                },
                {
                    name: "Czarodziejski Kapelusz",
                    description: "Kapelusz należący do Czarnoksiężnika, zmienia przedmioty w dziwne rzeczy.",
                    owner: "Tatuś Muminka"
                }
            ]);
        }

        const db = mongoose.connection.db;
        if (db) {
            const locCount = await db.collection("locations").countDocuments();
            if (locCount === 0) {
                console.log("Dodaję lokalizacje...");
                await db.collection("locations").insertMany([
                    { name: "Dolina Muminków", description: "Spokojne miejsce, gdzie stoi niebieski dom." },
                    { name: "Samotna Góra", description: "Groźne miejsce, gdzie mieszka Buka." }
                ]);
            }

            const relCount = await db.collection("relationships").countDocuments();
            if (relCount === 0) {
                console.log("Inicjuję relacje...");
                const muminek = await CharacterModel.findOne({ name: "Muminek" });
                const wloczykij = await CharacterModel.findOne({ name: "Włóczykij" });

                if (muminek && wloczykij) {
                    await db.collection("relationships").insertOne({
                        characterA: muminek._id,
                        characterB: wloczykij._id,
                        type: "Przyjaciele",
                        description: "Najlepsi przyjaciele z Doliny."
                    });
                    console.log("Dodano relację: Muminek <-> Włóczykij");
                }
            }
        }

        console.log("Seedowanie zakończone pomyślnie!");
    } catch (error) {
        console.error("Błąd podczas seedowania bazy:", error);
    }
}