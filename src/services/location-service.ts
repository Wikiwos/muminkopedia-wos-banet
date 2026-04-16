import {Location} from "../types/Location";
import {deleteLocationByID, findAllLocations, getOneLocationByID} from "../repositories/location-repository";
import {getLocations} from "../controllers/location-controller";

export async function fetchLocations(): Promise<Location[]> {
    return await findAllLocations()
}

export async function deleteLocation(id: string): Promise<Location | null> {
    if(!await getOneLocationByID(id)) {
        throw new Error(`Lokalizacja o id ${id} nie istnieje, więc nie da się jej usunąć`)
    } else {
        return await deleteLocationByID(id)
    }
}