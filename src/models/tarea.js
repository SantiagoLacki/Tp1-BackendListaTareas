import mongoose, {Schema} from "mongoose";

const tareaSchema = Schema({
  nombreTarea: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    unique: true
  },
  descripcionTarea: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100
  }
})

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;