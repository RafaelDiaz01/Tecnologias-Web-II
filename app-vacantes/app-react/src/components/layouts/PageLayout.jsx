import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

const PageLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-texto)] flex flex-col">
            <Navbar />

            {/* CONTENIDO PRINCIPAL */}
            <main className="flex-1 w-full px-8">{children}</main>

            <Footer />
        </div>
    );
};

export default PageLayout;