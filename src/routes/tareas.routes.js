import { Router } from "express";
import { crearTarea, leerTareas, test } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').get(leerTareas).post(crearTarea)

export default router;