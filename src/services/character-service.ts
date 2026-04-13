import {Character} from "../types/Character";
import {getAllCharacters, getCharacterByID} from "../repositories/character-repository";
import mongoose from "mongoose";

export async function fetchCharacters(): Promise<Character[]> {
    return await getAllCharacters()
}

export async function fetchCharacterByID(id: string): Promise<Character> {

    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(`ID ${id} nie jest w formacie ObjectId MongoDB`)
    } else {
        const character = await getCharacterByID(id)

        if(!character) {
            throw new Error(`Nie znaleziono postaci o id ${id}`)
        } else {
            return character
        }
    }
}