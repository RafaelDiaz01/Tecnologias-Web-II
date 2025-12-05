import { Settings, User } from "lucide-react";
import "./Navbar.css";

// Recibe onAddTask() que sirve para abrir el modal de nueva tarea
const Navbar = ({ onAddTask }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left"></div>

      <div className="navbar-right">
        {/* Botón para abrir el modal de nueva tarea */}
        <button className="btn-primary" onClick={onAddTask}>Añadir Nueva Tarea</button>

        {/* Botón de configuración */}
        <button className="settings-btn">
          <Settings size={22} />
        </button>

        {/* Botón de perfil de usuario */}
        <button className="profile">
          <User size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
