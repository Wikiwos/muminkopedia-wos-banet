import {CharacterModel} from "../models/character-model";
import {Character} from "../types/Character";

export async function getAllCharacters(): Promise<Character[]> {
    return CharacterModel.find()
}

export async function getCharacterByID(id: string): Promise<Character | null> {
    return CharacterModel.findById(id)
}