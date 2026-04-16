import {Location} from "../types/Location";
import {getAllLocations} from "../repositories/location-repository";

export async function fetchLocations(): Promise<Location[]> {
    return await getAllLocations()
}