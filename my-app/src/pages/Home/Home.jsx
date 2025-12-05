import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import TaskPage from "../../components/TaskPage/TaskPage.jsx";
import TaskModal from "../../components/TaskModal/TaskModal.jsx";
import "./Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false); // Estado para mostrar u ocultar el modal
  const [view, setView] = useState("pendiente"); // Estado para la vista actual, usamos pendiente por defecto
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas

  // Función para agregar una nueva tarea al estado de tareas
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowModal(false); // cerrar modal después de guardar
  };

  return (
    <div className="home-layout">
      {/* Sidebar para cambiar entre vistas, pendientes y completadas */}
      {/* Pasamos el estado y la función para cambiar la vista */}
      <Sidebar onChangeView={setView} view={view} />

      <div className="home-content">
        {/* Navbar con botón para abrir el modal de nueva tarea */}
        <Navbar onAddTask={() => setShowModal(true)} />

        {/* Mostrar el modal para crear una nueva tarea cuando el estado showModal es true */}
        {showModal && (
          <TaskModal
            onClose={() => setShowModal(false)} // función para cerrar el modal
            onSave={addTask} // función para guardar la nueva tarea
          />
        )}

        <main className="page-content">
          {/* Aquí irá el contenido principal de la página */}
          <TaskPage 
            tasks={tasks} // pasamos las tareas al TaskPage
            setTasks={setTasks} // pasamos la función para actualizar las tareas
            view={view} // pasamos la vista actual
          />
        </main>
      </div>
    </div>
  );
};

export default Home;
