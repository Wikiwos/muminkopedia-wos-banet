import {Relationship} from "../types/Relationship";
import {model, Schema} from "mongoose";

const relationshipSchema = new Schema<Relationship>({
    characterA: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Character"
    },
    characterB: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Character"
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

export const RelationshipModel = model<Relationship>('Relationship', relationshipSchema)