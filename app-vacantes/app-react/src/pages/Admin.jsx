import {
    User,
    Mail,
    Shield,
    Activity,
} from "lucide-react";
import PageLayout from "../components/layouts/PageLayout";
import InfoItem from "../components/InfoItem.jsx";

export default function Dashboard() {
    const user = {
        username: "rafael",
        email: "rafaeldiaz98@gmail.com",
        role: "usuario",
        status: "activo",
    };

    return (
        <PageLayout>
            <div className="w-full flex flex-col items-center justify-center">

                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
                    <div className="bg-[var(--color-secundario)] px-6 py-4">
                        <h2 className="text-[var(--color-texto-secundario)] text-lg font-semibold">
                            Bienvenido
                        </h2>
                    </div>

                    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <InfoItem
                            icon={<User className="text-[var(--color-secundario)]" />}
                            label="Username"
                            value={user.username}
                        />

                        <InfoItem
                            icon={<Mail className="text-[var(--color-secundario)]" />}
                            label="Email"
                            value={user.email}
                        />

                        <InfoItem
                            icon={<Shield className="text-[var(--color-secundario)]" />}
                            label="Perfil"
                            value={user.role}
                        />

                        <InfoItem
                            icon={<Activity className="text-[var(--color-secundario)]" />}
                            label="Estatus"
                            value={user.status}
                            activo
                        />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}


