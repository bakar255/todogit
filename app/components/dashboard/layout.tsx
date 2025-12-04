import Navbar from "../navbar";
import Sidebar from "../sidebar";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            
            {/* SIDEBAR À GAUCHE */}
            <Sidebar />

            {/* CONTENU PRINCIPAL */}
            <div className="flex-1">
                <Navbar />

                {/* CONTAINER CENTRÉ */}
                <main className="max-w-7xl mx-auto px-6 mt-20">
                    {children}
                </main>
            </div>

        </div>
    );
}