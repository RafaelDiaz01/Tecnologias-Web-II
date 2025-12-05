import { FileText, List, Clock, CircleCheck } from "lucide-react";
import "./Sidebar.css";

// Recibe onChangeView(view) y view ("pendiente" | "completada")
const Sidebar = ({ onChangeView = () => {}, view = "pendiente" }) => {
  return (
    <aside className="sidebar">
      {/* logo y título */}
      <div className="sidebar-header">
        <FileText />
        <h2>Panel de Tareas</h2>
      </div>

      {/* secciones */}
      <nav className="sidebar-nav">
        <div className="sidebar-header">
          <List size={17} />
          <p className="section-title">Todas las Tareas</p>
        </div>

        <button
          className={`nav-item ${view === "pendiente" ? "selected" : ""}`} // agregar clase selected si la vista actual es pendiente
          onClick={() => onChangeView("pendiente")} // onChangeView es una función que cambia la vista en el Home
        >
          <Clock size={17} />
          Pendientes
        </button>

        <button
          className={`nav-item ${view === "completada" ? "selected" : ""}`} // agregar clase selected si la vista actual es completada
          onClick={() => onChangeView("completada")}
        >
          <CircleCheck size={17} />
          Completadas
        </button>
      </nav>

      {/* workspace info */}
      <div className="sidebar-footer">
        <div className="workspace-avatar"></div>
        <div className="workspace-info">
          <p className="workspace-name">Rafael's Workspace</p>
          <p className="workspace-type">Personal</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
