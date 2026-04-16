import {Location} from "../types/Location"
import {LocationModel} from "../models/location-model";

// GET
export async function findAllLocations(): Promise<Location[]> {
    return LocationModel.find()
}

export async function getOneLocationByID(id: string): Promise<Location | null> {
    return LocationModel.findById(id)
}

export async function deleteLocationByID(id: string): Promise<Location | null> {
    return LocationModel.findByIdAndDelete(id)
}