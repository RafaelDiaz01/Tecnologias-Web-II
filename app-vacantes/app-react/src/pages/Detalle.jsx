import { FileIcon, CalendarClock, TextAlignJustify, Eye } from "lucide-react";
import PageLayout from "../components/layouts/PageLayout";
import InfoItem from "../components/InfoItem";
import { useParams } from "react-router-dom";

export default function Detalle() {
  const { id } = useParams();
  const vacante = {
    nombre: "Desarrollador Frontend",
    fecha: "20-11-2022",
    descripcion: "Se necesita React",
    detalles: "Minimo un año de experiencia",
  };

  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
          <div className="bg-[var(--color-secundario)] px-6 py-4">
            <h2 className="text-[var(--color-texto-secundario)] text-lg font-semibold">
              Vacante {id ? `#${id}` : ''}
            </h2>
          </div>

          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoItem
              icon={<FileIcon className="text-[var(--color-secundario)]" />}
              label="Vacante"
              value={vacante.nombre}
            />

            <InfoItem
              icon={<CalendarClock className="text-[var(--color-secundario)]" />}
              label="Publicado"
              value={vacante.fecha}
            />

            <InfoItem
              icon={<TextAlignJustify className="text-[var(--color-secundario)]" />}
              label="Descripción"
              value={vacante.descripcion}
            />

            <InfoItem
              icon={<Eye className="text-[var(--color-secundario)]" />}
              label="Detalles"
              value={vacante.detalles}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
