import { Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Stack from "../components/layouts/Stack.jsx"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // React Hook Form
  const {
    handleSubmit,
  } = useForm();

  const onSubmit = async() => {
    navigate("/admin");
  }

  return (
    <div className="relative h-screen overflow-hidden bg-white flex items-center justify-center login-diagonal-bg">

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl px-8 py-10 text-center">
          
          <Stack gap="gap-6" className="w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-secundario)]">
              <Lock className="text-[var(--color-texto-secundario)]" size={28} />
            </div>
            <h1 className="text-xl font-semibold text-[var(--color-texto)]">
              App Vacantes
            </h1>
            <p className="text-sm text-gray-500">
              Ingreso al sistema
            </p>
          </div>

          <Stack gap="gap-3" className="w-full">
            <form className="flex flex-col gap-4">

              {/* Usuario */}
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-gray-600">
                  Usuario
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="usuario"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-borde)] transition"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-gray-600">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="****"
                    className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-borde)] transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-borde)] transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="w-full py-2.5 rounded-lg bg-[var(--color-secundario)] text-white font-semibold hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                Login
              </button>
            </form>
          </Stack>

          <p className="text-center text-xs text-gray-400 mt-6">
            © 2026 App Vacantes
          </p>
          </Stack>
        </div>
      </div>
    </div>
  );
}
