import PageLayout from "../components/layouts/PageLayout";

export default function Acerca() {
    return (
        <PageLayout>
            <div className="w-full flex flex-col items-center justify-center">

                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
                    <div className="bg-[var(--color-secundario)] px-6 py-4">
                        <h2 className="text-[var(--color-texto-secundario)] text-lg font-semibold">
                            Acerca
                        </h2>
                    </div>

                    <div className="flex justify-center items-center p-6 text-justify">
                        <p className="text-gray-600 leading-relaxed">
                            Bienvenido a la plataforma de empleo de <b>Vacantes App</b>. Nuestra meta es simple: reunir a los mejores profesionales para resolver los problemas más complejos de la industria.
                            Buscamos perfiles apasionados, resilientes y con ganas de aprender. Si buscas un entorno que desafíe tus capacidades y recompense tu iniciativa, estás en el lugar correcto. Explora nuestras vacantes y encuentra el próximo gran paso en tu trayectoria profesional.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};