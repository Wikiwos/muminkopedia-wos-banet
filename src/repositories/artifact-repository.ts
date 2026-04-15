import {Artifact} from "../types/Artifact";
import {ArtifactModel} from "../models/artifact-model";

// GET
export async function getAllArtifacts(): Promise<Artifact[]> {
    return ArtifactModel.find()
}