import {Request, Response} from "express"
import {fetchLocations} from "../services/location-service";

// GET
export async function getLocations(req: Request, res: Response): Promise<void> {
    try {
        const locations = await fetchLocations()

        res.status(200).json(locations)
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się załadować miejsc: ${errorMessage}`})
    }
}