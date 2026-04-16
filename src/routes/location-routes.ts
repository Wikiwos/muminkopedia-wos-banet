import express from "express";
import {getLocations} from "../controllers/location-controller";

const router = express.Router()

router.get("/", getLocations)

export default router