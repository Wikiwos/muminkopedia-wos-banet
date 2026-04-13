import {Request, Response} from "express"
import {fetchCharacterByID, fetchCharacters} from "../services/character-service";

export async function getCharacters(req: Request, res: Response): Promise<void> {
    try {
        // Controller prosi Service o przygotowanie danych
        const characters = await fetchCharacters()

        // Controller serwuje dane frontendowi
        res.status(200).json(characters)
    } catch (err) {
        res.status(500).json({error: `Nie udało się załadować postaci: ${err}`})
    }
}

export async function getCharacterByID(req: Request, res: Response): Promise<void> {
    try {
        const id: string = req.params.id as string // cast req.params.id na string

        const character = await fetchCharacterByID(id)
        res.status(200).json(character)
    } catch (err) {
        res.status(500).json({error: `Nie udało się załadować postaci: ${err}`})
    }
}