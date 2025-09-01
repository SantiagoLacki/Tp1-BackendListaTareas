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
    console.log(req.body)
    // Validar datos
    // Guardar objeto en la bd
    // Enviar respuesta
    
  } catch (error) {
    console.error(error);
  }
}

// Agregar funcion para editar tarea