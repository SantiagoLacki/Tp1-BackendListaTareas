import { Router } from "express";
import { crearProducto, leerProductos, test } from "../controllers/productos.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').get(leerProductos).post(crearProducto)

export default router;