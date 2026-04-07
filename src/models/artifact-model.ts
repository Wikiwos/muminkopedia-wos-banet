// Tworzymy Schemat Mongoose o nazwie Artifact bazując na interfejsie Artifact.ts
import {model, Schema} from "mongoose";
import {Artifact} from "../types/Artifact"

const artifactSchema = new Schema<Artifact>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true // Automatycznie doda createdAt i updatedAt
});

// Eksportujemy gotowy Model
export const ArtifactModel = model<Artifact>('Artifact', artifactSchema);