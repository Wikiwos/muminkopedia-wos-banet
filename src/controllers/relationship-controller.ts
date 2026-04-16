import {Request, Response} from "express"
import * as relationshipService from "../services/relationship-service";

// GET
export async function getRelationships(req: Request, res: Response): Promise<void> {
    try {
        const relationships = await relationshipService.getRelationships()
        res.status(200).json(relationships)
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się załadować relacji: ${errorMessage}`})
    }
}

export async function getRelationshipByID(req: Request, res: Response): Promise<void> {
    try {
        const id: string = req.params.id as string

        const relationship = await relationshipService.getRelationshipByID(id)
        res.status(200).json(relationship)
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się załadować relacji: ${errorMessage}`})
    }
}