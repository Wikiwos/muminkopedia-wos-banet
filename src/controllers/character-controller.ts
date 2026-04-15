import {Request, Response} from "express"
import {addCharacter, fetchCharacterByID, fetchCharacters} from "../services/character-service";


// GET
export async function getCharacters(req: Request, res: Response): Promise<void> {
    try {
        // Controller prosi Service o przygotowanie danych
        const characters = await fetchCharacters()

        // Controller serwuje dane frontendowi
        res.status(200).json(characters)
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się załadować postaci: ${errorMessage}`})
    }
}

export async function getCharacterByID(req: Request, res: Response): Promise<void> {
    try {
        const id: string = req.params.id as string // cast req.params.id na string

        const character = await fetchCharacterByID(id)
        res.status(200).json(character)
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się załadować postaci: ${errorMessage}`})
    }
}


// POST
export async function postCharacter(req: Request, res: Response): Promise<void> {
    try {
        const {name, description, species, isHibernating} = req.body

        const newCharacter = await addCharacter({name, description, species, isHibernating})

        res.status(201).json({message: "Dodano nową postać", value: newCharacter})
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udało się dodać postaci: ${errorMessage}`})
    }
}