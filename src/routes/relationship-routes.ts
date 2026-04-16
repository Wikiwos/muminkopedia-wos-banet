import express from "express";
import {getRelationshipByID, getRelationships} from "../controllers/relationship-controller";

const router = express.Router()

router.get("/", getRelationships)

router.get("/:id", getRelationshipByID)

export default router