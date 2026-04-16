import {Request, Response} from "express"
import {fetchArtifacts, patchArtifact} from "../services/artifact-service";
import {ArtifactParams} from "../types/ArtifactParams";

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


// PATCH
export async function changeArtifact(req: Request<ArtifactParams>, res: Response): Promise<void> { // Request jest typu ArtifactParams bo typescript myśli że req.params.id może nie być typu string
    try {
        const {id} = req.params
        const updateQuery = req.body

        const patchedArtifact = await patchArtifact(id, updateQuery)

        res.status(200).json({
            message: `Pomyślnie zmieniono artefakt o id ${id}`,
            data: patchedArtifact
        })
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się zmienić artefaktu: ${errorMessage}`})
    }
}