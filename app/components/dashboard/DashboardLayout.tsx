import Navbar from "../navbar";
import Sidebar from "../sidebar/sidebar";

// Layout to ensure best layout for the dashboard

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
 <div className="flex min-h-screen w-full">
  <Sidebar />
  <div className="flex-1 flex flex-col w-full">
      <Navbar />
    <main className="flex-1 px-6 w-full">{children}</main>
  </div>
</div>
    );
}


