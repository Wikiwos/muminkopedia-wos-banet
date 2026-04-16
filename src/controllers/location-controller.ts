import {Request, Response} from "express"
import {fetchLocations} from "../services/location-service";
import {deleteLocation as deleteLocationService} from "../services/location-service";
import {LocationParams} from "../types/LocationParams";

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

// DELETE
export async function deleteLocation(req: Request<LocationParams>, res: Response): Promise<void> {
    try {
        const {id} = req.params

        const result = await deleteLocationService(id)
        res.status(200).json({mesage: `Pomyślnie usunięto lokalizację o id ${id}`})
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się usunąć lokalizacji: ${errorMessage}`})
    }
}