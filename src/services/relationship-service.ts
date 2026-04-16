import {Relationship} from "../types/Relationship";
import * as relationshipRepository from "../repositories/relationship-repository";
import mongoose from "mongoose";

// GET
export async function getRelationships(): Promise<Relationship[]> {
    return await relationshipRepository.getAllRelationships()
}

export async function getRelationshipByID(id: string): Promise<Relationship> {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(`ID ${id} nie jest w formacie ObjectId MongoDB`)
    } else {
        const relationship = await relationshipRepository.getRelationshipByID(id)

        if(!relationship) {
            throw new Error(`Nie znaleziono relacji o id ${id}`)
        } else {
            return relationship
        }
    }
}