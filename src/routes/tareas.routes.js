import { Router } from "express";
import { crearTarea, leerTareas, leerTareaPorId, test } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').get(leerTareas).post(crearTarea)
router.route('/:id').get(leerTareaPorId)

export default router;