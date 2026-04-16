import express from "express";
import {deleteLocation, getLocations} from "../controllers/location-controller";

const router = express.Router()

router.get("/", getLocations)

router.delete("/:id", deleteLocation)

export default router