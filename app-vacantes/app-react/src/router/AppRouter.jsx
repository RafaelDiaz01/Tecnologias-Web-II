import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Admin from "../pages/Admin.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRouter;
