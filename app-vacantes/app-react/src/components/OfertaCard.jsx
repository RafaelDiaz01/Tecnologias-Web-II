import { ArrowRight, FileText } from "lucide-react";

export default function OfertaCard({ title, highlight }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4
                        hover:-translate-y-1 hover:shadow-xl transition`}
    >
      <h3
        className={`text-lg font-semibold ${
          highlight ? "text-red-600" : "text-gray-800"
        }`}
      >
        {title}
      </h3>

      {highlight && (
        <p className="text-sm text-red-500">
          As of v8.0, Safari exhibits a bug.
        </p>
      )}

      <p className="text-sm text-gray-600 leading-relaxed text-justify">
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus
        ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
        justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
        Donec sed odio dui.
      </p>

      <button
        className="mt-auto inline-flex items-center gap-2 w-fit px-4 py-2
                           rounded-lg text-sm font-medium
                           bg-[var(--color-secundario)]
                           text-[var(--color-texto-secundario)]
                           hover:opacity-90
                           transition"
      >
        <FileText size={16} />
        Ver detalles
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
