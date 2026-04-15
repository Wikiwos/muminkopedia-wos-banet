import {Character} from "../types/Character";
import {
    createCharacter,
    getAllCharacters,
    getCharacterByID,
    getCharacterByName
} from "../repositories/character-repository";
import mongoose from "mongoose";

// GET
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

// POST
export async function addCharacter({name, description, species, isHibernating}: Character): Promise<Character> {
    const missingFields: string[] = []

    if(!name) missingFields.push("name")
    if(!description) missingFields.push("description")
    if(!species) missingFields.push("species")
    if(!isHibernating) missingFields.push("isHibernating")

    if(missingFields.length > 0) {
        throw new Error(`Nie podano wymaganych danych: ${missingFields.join(', ')}`)
    } else if(await getCharacterByName(name)) {
        throw new Error(`Postać o nazwie ${name} istnieje już w bazie`)
    } else {
        return await createCharacter({name, description, species, isHibernating})
    }
}