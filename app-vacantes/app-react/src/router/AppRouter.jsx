import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Admin from "../pages/Admin.jsx";
import CrearVacante from "../pages/CrearVacante.jsx";
import Vacantes from "../pages/Vacantes.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/crear-vacante" element={<CrearVacante />} />
      <Route path="/vacantes" element={<Vacantes />} />
    </Routes>
  );
};

export default AppRouter;
