import {Artifact} from "../types/Artifact";
import {getAllArtifacts} from "../repositories/artifact-repository";

// GET
export async function fetchArtifacts(): Promise<Artifact[]> {
    return await getAllArtifacts()
}