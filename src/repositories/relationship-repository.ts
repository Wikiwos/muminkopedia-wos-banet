import {RelationshipModel} from "../models/relationship-model";
import {Relationship} from "../types/Relationship";

// GET
export async function getAllRelationships(): Promise<Relationship[]> {
    return RelationshipModel.find().populate('characterA characterB');
}

export async function getRelationshipByID(id: string): Promise<Relationship | null> {
    return RelationshipModel.findById(id).populate('characterA characterB');
}