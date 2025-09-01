import { Router } from "express";
import { crearTarea, leerTareas, leerTareaPorId, test, borrarTareaPorId, editarTareaPorId } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').get(leerTareas).post(crearTarea)
router.route('/:id').get(leerTareaPorId).delete(borrarTareaPorId).put(editarTareaPorId)

export default router;