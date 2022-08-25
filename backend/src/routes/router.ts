import { Router } from "express"
import { helloWorld } from "../controllers/controller"

export const router = Router()

router.get("/", helloWorld)
