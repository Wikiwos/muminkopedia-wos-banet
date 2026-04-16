import {model, Schema} from "mongoose";
import {Location} from "../types/Location";

const locationSchema = new Schema<Location>({
    name: {
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

export const LocationModel = model<Location>("Location", locationSchema)