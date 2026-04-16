import {Artifact} from "../types/Artifact";
import {getAllArtifacts, getArtifactByID, updateArtifact} from "../repositories/artifact-repository";
import mongoose from "mongoose";
import {NewArtifact} from "../types/NewArtifact";

// GET
export async function fetchArtifacts(): Promise<Artifact[]> {
    return await getAllArtifacts()
}

// PATCH
export async function patchArtifact(id: string, updateQuery: NewArtifact): Promise<Artifact | null> {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(`ID ${id} nie jest w formacie ObjectId MongoDB`)
    } else {
        const artifact = await getArtifactByID(id)

        if(!artifact) {
            throw new Error(`Artefakt o id ${id} nie istnieje w bazie więc nie można go zmienić`)
        } else {
            return await updateArtifact(id, updateQuery)
        }
    }
}