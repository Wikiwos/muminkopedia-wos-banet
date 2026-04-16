import {Location} from "../types/Location"
import {LocationModel} from "../models/location-model";

// GET
export async function getAllLocations(): Promise<Location[]> {
    return LocationModel.find()
}