// Tworzymy Schemat Mongoose o nazwie Character bazując na interfejsie Character.ts
import {model, Schema} from "mongoose";
import {Character} from "../types/Character"

const characterSchema = new Schema<Character>({
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
    species: {
        type: String,
        required: true,
        enum: ['Moomintroll','Hemulen','Snork','Mumrik']
    },
    isHibernating: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true // Automatycznie doda createdAt i updatedAt
});

// Eksportujemy gotowy Model
export const CharacterModel = model<Character>('Character', characterSchema);