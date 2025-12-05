import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./TaskModal.css";

// Recibe onClose() y onSave(newTask) que sirven para cerrar el modal y guardar la tarea
const TaskModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState(""); // estado para el título de la tarea
  const [description, setDescription] = useState(""); // estado para la descripción de la tarea

  // Función para manejar el guardado de la tarea
  const handleSave = () => {
    // Trim para eliminar espacios innecesarios
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    // Validación para evitar título vacío
    if (!trimmedTitle) {
      alert("El título no puede estar vacío.");
      return;
    }

    // Validación para evitar descripción vacía
    if (!trimmedDescription) {
      alert("La descripción no puede estar vacía.");
      return;
    }

    // Validación para evitar título con menos de 3 palabras
    const contadorPalabras = trimmedTitle.split(/\s+/).length;
    if (contadorPalabras < 3) {
      alert("El título debe tener al menos 3 palabras.");
      return;
    }

    // Validación para evitar descripción con más de 150 caracteres
    if (trimmedDescription.length > 150) {
      alert("La descripción no puede tener más de 150 caracteres.");
      return;
    }

    // Crear el objeto de la nueva tarea
    const nuevaTarea = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    onSave(nuevaTarea); // enviamos la tarea al Home

    // Mostrar alerta de éxito
    Swal.fire({
      icon: "success",
      title: "Tarea creada",
      text: "La tarea se guardó correctamente.",
      timer: 1000, // duración en milisegundos
      showConfirmButton: false, // no mostrar botón de confirmación
    });
  };

  // Render del modal, con inputs controlados para título y descripción
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h1>Crear Nueva Tarea</h1>
        <p>Ingresa los detalles de tu nueva tarea a continuación.</p>

        <label>Título de la Tarea</label>
        <input
          type="text"
          placeholder="Ej. Comprar despensa para la semana"
          className="modal-input"
          value={title} // aquí va el estado del título 
          onChange={(e) => setTitle(e.target.value)} // actualizar el estado al cambiar, e.target.value sirve para obtener el valor actual del input
        />

        <label>Descripción de la Tarea</label>
        <textarea
          placeholder="¿Qué necesitas hacer?"
          className="modal-textarea"
          value={description} // aquí va el estado de la descripción
          onChange={(e) => setDescription(e.target.value)} // actualizar el estado de la descripción al cambiar
        ></textarea>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}> {/* al hacer click en cancelar se llama a onClose */}
            Cancelar
          </button>
          <button className="btn-save" onClick={handleSave}> {/* al hacer click en guardar se llama a handleSave */}
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
