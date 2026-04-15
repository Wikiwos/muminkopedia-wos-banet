import {CharacterModel} from "../models/character-model";
import {Character} from "../types/Character";

// GET
export async function getAllCharacters(): Promise<Character[]> {
    return CharacterModel.find()
}

export async function getCharacterByID(id: string): Promise<Character | null> {
    return CharacterModel.findById(id)
}

export async function getCharacterByName(name: string): Promise<Character | null> {
    return CharacterModel.findOne({name})
}

// POST
export async function createCharacter({name, description, species, isHibernating}: Character): Promise<Character> {
    const newCharacter = new CharacterModel({name, description, species, isHibernating})
    return await newCharacter.save()
}