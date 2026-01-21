export default function InfoItem({ icon, label, value, activo }) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
            <div className="p-2 rounded-lg bg-white shadow-sm">
                {icon}
            </div>
            <div>
                <p className="text-sm text-slate-500">{label}</p>
                {activo ? (
                    <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-primario)] text-[var(--color-texto)]">
                        {value}
                    </span>
                ) : (
                    <p className="text-base font-medium text-[var(--color-texto)]">
                        {value}
                    </p>
                )}
            </div>
        </div>
    );
}