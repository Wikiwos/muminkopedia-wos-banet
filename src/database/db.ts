import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

export const dbName = "muminkopedia";

export async function connectDB() {
    await client.connect();
    console.log("MongoDB działa");

    return client.db(dbName);
}

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