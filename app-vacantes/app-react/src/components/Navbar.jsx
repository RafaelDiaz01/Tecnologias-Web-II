import { NavLink } from "react-router-dom";
import { LogOut, PlusCircle, Briefcase } from "lucide-react";

const linkClass = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
    isActive
      ? "text-sm font-semibold"
      : "text-slate-600 hover:bg-[var(--color-primario)] hover:text-[var(--color-texto)]"
  }`;

export default function Navbar() {
  return (
    <header className="w-full bg-[var(--color-fondo)] px-8 py-6">
      <div className="mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-lg font-semibold text-slate-700">
          <NavLink to="/index">
            Vacantes <span className="text-[var(--color-secundario)]">App</span>
          </NavLink>
        </h1>

        <nav className="flex gap-3">
          <NavLink to="/crear-vacante" className={linkClass}>
            <PlusCircle size={18} />
            Crear Vacante
          </NavLink>

          <NavLink to="/vacantes" className={linkClass}>
            <Briefcase size={18} />
            Vacantes
          </NavLink>

          <NavLink
            to="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-600 transition text-[var(--color-cancel)] hover:bg-[var(--color-cancel)] hover:text-[var(--color-texto)]"
          >
            <LogOut size={18} />
            Salir
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
