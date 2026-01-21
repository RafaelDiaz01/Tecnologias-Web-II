import Input from "../components/Input.jsx";
import PageLayout from "../components/layouts/PageLayout.jsx";
import { Upload } from "lucide-react";

export default function CrearVacante() {
    return (
        <PageLayout>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
                    <div className="bg-[var(--color-secundario)] px-6 py-4">
                        <h2 className="text-[var(--color-texto-secundario)] text-lg font-semibold">
                            Crear Vacante
                        </h2>
                    </div>

                    <div className="p-6 grid grid-cols-1 gap-6">
                        <Input
                            label="Nombre"
                            placeholder="Ej. Programador Junior"
                        />
                        <Input
                            label="Descripción"
                            placeholder="Ej. Se busca persona con 1 año de experiencia en desarrollo web"
                        />
                        <Input
                            label="Detalles"
                            placeholder="Ej. Experiencia en React"
                        />
                    </div>

                    <div className="p-6 flex justify-center">
                        <button className="w-auto px-6 py-2.5 rounded-lg bg-[var(--color-secundario)] text-white font-semibold hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-3">
                            <Upload size={18} />
                            Publicar
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}