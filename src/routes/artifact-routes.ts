import express from "express";
import {getArtifacts} from "../controllers/artifact-controller";

const router = express.Router()

router.get("/", getArtifacts)

export default router