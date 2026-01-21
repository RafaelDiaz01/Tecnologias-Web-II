import { AlertTriangle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";

export default function Mensaje() {
    const navigate = useNavigate();

    return (
        <PageLayout>
            <div className="w-full flex flex-col items-center justify-center py-10 px-4">

                <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in text-center">

                    {/* Header */}
                    <div className="bg-[var(--color-secundario)] px-6 py-6 flex flex-col items-center gap-2">
                        <AlertTriangle
                            size={42}
                            className="text-[var(--color-texto-secundario)]"
                        />
                        <h1 className="text-3xl font-bold text-[var(--color-texto-secundario)]">
                            404
                        </h1>
                        <p className="text-sm opacity-90 text-[var(--color-texto-secundario)]">
                            Página no encontrada
                        </p>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col items-center gap-6">
                        <p className="text-gray-600">
                            La página que intentas visitar no existe o fue movida.
                        </p>

                        <button
                            onClick={() => navigate(-1)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg 
                                       bg-[var(--color-secundario)] 
                                       text-[var(--color-texto-secundario)] 
                                       font-medium 
                                       hover:opacity-90 
                                       active:scale-95 
                                       transition"
                        >
                            <ArrowLeft size={18} />
                            Volver
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
