import Image from "next/image";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";

export default function Home() {
  
  
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <Sidebar />
      <Dashboard /> 
    </div>
  );
}
