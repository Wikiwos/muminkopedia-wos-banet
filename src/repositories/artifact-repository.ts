import {Artifact} from "../types/Artifact";
import {ArtifactModel} from "../models/artifact-model";
import {UpdateQuery} from "mongoose";
import {NewArtifact} from "../types/NewArtifact";

// GET
export async function getAllArtifacts(): Promise<Artifact[]> {
    return ArtifactModel.find()
}

export async function getArtifactByID(id: string): Promise<Artifact | null> {
    return ArtifactModel.findById(id)
}


// PATCH
export async function updateArtifact(id: string, updateQuery: UpdateQuery<NewArtifact>): Promise<Artifact | null> {
    return ArtifactModel.findByIdAndUpdate(id, updateQuery)
}