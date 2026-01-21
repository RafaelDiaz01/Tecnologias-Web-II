import { Search } from "lucide-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./TaskPage.css";

// Recibe las tareas y la función para actualizar el estado desde el componente padre
const TaskPage = ({ tasks, setTasks, view }) => {
  const pendingTasks = tasks.filter((t) => !t.completed); // Sirve para separar las tareas pendientes utilizando el filtro
  const completedTasks = tasks.filter((t) => t.completed); // Muestra las tareas completadas

  // Determina qué lista de tareas mostrar según la vista actual
  const listToShow = view === "pendiente" ? pendingTasks : completedTasks;

  return (
    <div className="tasks-container">
      <h1 className="tasks-title">
        {/* Muestra el titulo de la seccion dependiendo de la vista */}
        {view === "pendiente" ? "Tareas Pendientes" : "Tareas Completadas"}
      </h1>
      <p className="tasks-subtitle">
        {/* Muestra un subtitulo dependiendo de la vista */}
        {view === "pendiente"
          ? "Aquí están tus tareas actuales. ¡Manos a la obra!"
          : "Aquí tienes tus tareas finalizadas."}
      </p>

      {/* BUSCADOR */}
      <div className="tasks-search">
        <Search />
        <input type="text" placeholder="Buscar tarea..." />
      </div>

      {/* LISTA DE TAREAS SEGÚN LA VISTA */}
      <div className="task-card">
        {listToShow.length === 0 && (
          <p className="no-tasks">
            {view === "pendiente"
              ? "No tienes tareas pendientes."
              : "No tienes tareas completadas."}
          </p>
        )}

        {/* Mapea y muestra cada tarea en la lista correspondiente */}
        {listToShow.map((task) => (
          <div key={task.id} className="task-item">
            <div className="task-text">
              {/* Muestra el título de la tarea, pero con un estilo diferente si está completada */}
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
              <p>
                <b>Descripción:</b> {task.description}
              </p>
            </div>

            <div className="task-actions">
              {/* Alterna el estado de completado de la tarea al hacer clic */}
              <button
                className="btn-complete"
                onClick={() =>
                  // t es la tarea actualizada
                  // Recorre las tareas y actualiza el estado de completado de la tarea correspondiente
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              >
                {/* Muestra el texto del botón según el estado de la tarea */}
                {task.completed ? "Desmarcar" : "Completar"}
              </button>

              <button
                className="btn-delete"
                onClick={() => {
                  // Confirmación antes de eliminar
                  Swal.fire({
                    title: "¿Eliminar tarea?",
                    text: "Esta acción no se puede deshacer.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Sí, eliminar",
                    cancelButtonText: "Cancelar",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      // Elimina la tarea si se confirma
                      setTasks(tasks.filter((t) => t.id !== task.id));
                      Swal.fire({
                        icon: "success",
                        title: "Eliminada",
                        text: "La tarea fue eliminada.",
                        timer: 1000, // se cierra automáticamente después de 1 segundo
                        showConfirmButton: false, // no mostrar el botón de confirmación
                      });
                    }
                  });
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
