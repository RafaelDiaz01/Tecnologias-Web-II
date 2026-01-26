import { Briefcase, FileText, ArrowRight } from "lucide-react";
import PageLayout from "../components/layouts/PageLayout.jsx";
import OfertaCard from "../components/OfertaCard.jsx";
import Stack from "../components/layouts/Stack.jsx";
export default function Index() {
  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center justify-center py-10 gap-16">
        {/* HERO */}
        <section className="max-w-4xl text-center animate-fade-in px-4">
          <Stack gap="gap-6" className="w-full items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              ¡ENCUENTRA TU TRABAJO IDEAL!
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Bienvenido a <b>Vacantes App</b>, aquí podrás encontrar ofertas de
              empleos que sean adecuados a tu perfil, experiencia y ubicación.
              Es muy fácil de usar, solo haz clic en una vacante, ingresa para
              ver los detalles y envíanos tu CV en formato PDF o DOCX. Nosotros
              revisaremos tu CV y posteriormente te contactaremos.
            </p>

            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                                   bg-[var(--color-secundario)]
                                   text-[var(--color-texto-secundario)]
                                   font-medium
                                   hover:opacity-90
                                   active:scale-95
                                   transition shadow-md"
            >
              <Briefcase size={18} />
              Ver más Ofertas
            </button>
          </Stack>
        </section>

        {/* OFERTAS */}
        <section className="w-full max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Ofertas recientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OfertaCard title="Chef" highlight text="Cocinero con experiencia en comida Japonesa"/>
            <OfertaCard title="Programador BackEnd" text="Estamos en busca de un programador Senior con experiencia en SpringBoot"/>
            <OfertaCard title="Tester" text="Se necesita tester para sistemas bancarios criticos."/>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
