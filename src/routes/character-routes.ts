import express, {Request, Response} from "express";
import {Character} from "../types/Character";
import {CharacterModel} from "../models/character-model";
import {getCharacterByID, getCharacters} from "../controllers/character-controller";

const router = express.Router()

router.get("/", getCharacters)


router.get("/:id", getCharacterByID)

// TODO – implement the CSR architecture for the post method
router.post("/", async (req: Request, res: Response) => {
    console.log(req.body)

    try {
        const { name, description, species, isHibernating } = req.body
        const characterExists = await CharacterModel.findOne({name})

        if(!name || !description || !species || ! isHibernating) {
            res.status(400).json("Nie wypełniono wszystkich pól")
        }
        else if(characterExists) {
            return res.status(400).json({error: `Postać o nazwie ${name} już istnieje w bazie danych`})
        } else {
            // utworzenie nowej instancji CharacterModel i zapisanie jej w const newCharacter
            const newCharacter: Character = new CharacterModel({
                name: name,
                description: description,
                species: species,
                isHibernating: isHibernating
            })

            // TODO – add method for saving the newCharacter to the database
        }
    }
    catch (err) {
        if(err instanceof Error) {
            res.status(500).json({error: `Nie udało się dodać postaci: ${err}`})
        } else {
            console.log(err)
        }
    }
})

export default router