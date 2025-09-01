import { Router } from "express";
import tareaRoutes from "./tareas.routes.js";

const router = Router()

router.use('/tareas', tareaRoutes)

export default router;