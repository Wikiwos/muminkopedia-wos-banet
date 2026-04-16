import express from "express";
import {changeArtifact, getArtifacts} from "../controllers/artifact-controller";

const router = express.Router()

router.get("/", getArtifacts)

router.patch("/:id", changeArtifact)

export default router