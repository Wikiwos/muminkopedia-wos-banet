import {Request, Response} from "express"
import {fetchArtifacts} from "../services/artifact-service";

// GET
export async function getArtifacts(req: Request, res: Response): Promise<void> {
    try {
        const artifacts = await fetchArtifacts()

        res.status(200).json(artifacts)
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się załadować artefaktów: ${errorMessage}`})
    }
}