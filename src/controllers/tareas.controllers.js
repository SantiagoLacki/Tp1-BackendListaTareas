import Tarea from "../models/tarea.js"

export const test = (req, res) => {
  res.status(200)
  res.send('Primera prueba desde el backend!!')
}

export const leerTareas = (req,res) => {

}
// Agregar funcion para crear tarea
export const crearTarea = async (req,res) => {
  try {
    // Recibir objeto
    // console.log(req.body)
    // Validar datos
    // Guardar objeto en la bd
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    // Enviar respuesta
    res.status(201).json({mensaje: 'la tarea fue creada con exito.'})
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'No se pudo crear la tarea'})
  }
}

// Agregar funcion para editar tarea