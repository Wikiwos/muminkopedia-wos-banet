import express, {Request, Response} from "express";
import {getCharacterByID, getCharacters, postCharacter} from "../controllers/character-controller";

const router = express.Router()

router.get("/", getCharacters)

router.get("/:id", getCharacterByID)

router.post("/", postCharacter)

export default router