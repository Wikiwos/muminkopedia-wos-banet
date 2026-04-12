import express, {Request, Response} from "express";
import {Character} from "../types/Character";
import {CharacterModel} from "../models/character-model";

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    try {
        const characters: Array<Character> = await CharacterModel.find()
        res.status(200).json(characters)
    }
    catch (err) {
        res.status(500).json({error: `Nie udało się załadować postaci:\n ${err}`})
    }
})

router.get("/:id", async (req: Request, res: Response) => {
    try {
        // TODO: fix, returns empty object as json response
        const { name, description, species, isHibernating } = req.params
        res.json({
            "name": name,
            "description": description,
            "species": species,
            "isHibernating": isHibernating
        })
    }
    catch (err) {
        res.status(500).json({error: `Nie udało się załadować postaci:\n ${err}`})
    }
})

export default router