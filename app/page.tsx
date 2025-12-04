import Image from "next/image";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar";
import DashboardLayout from "./components/dashboard/layout";

export default function Home() {
  
  
  return (
    <div className="flex min-h-screen">
      <Navbar />

      <DashboardLayout>
      <Dashboard /> 
      </DashboardLayout>
       
    </div>
  );
}
