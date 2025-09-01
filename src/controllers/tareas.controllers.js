import Tarea from "../models/tarea.js"

export const test = (req, res) => {
  res.status(200)
  res.send('Primera prueba desde el backend!!')
}

export const leerTareas = async (req,res) => {
  try {
    // Buscar todas las tareas en la bd
    const listaTareas = await Tarea.find();
    // Enviar resp al front
    res.status(200).json(listaTareas)
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje: 'Error al leer las tareas.'})
  }
}

export const leerTareaPorId = async (req,res) => {
  try {
    // Otener el parametro del request
    console.log(req.params);
    console.log(req.params.id);
    // Pedir a mongoose que encuentre la tarea
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({mensaje:'Tarea NO encontrada.'});
    }
    // Contestar al front
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'No se pudo obtener la tarea.'});
  }
}

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

export const borrarTareaPorId = async (req,res) => {
  try {
    // Buscar la tarea por id y borrarlo
    const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id);
    if (!tareaEliminada) {
      return res.status(404).json({mensaje:'Tarea NO encontrada.'});
    }
    // Contestar al front
    res.status(200).json({mensaje: 'Tarea eliminada con exito.'});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'No se pudo eliminar la tarea.'});
  }
}

// Agregar funcion para editar tarea