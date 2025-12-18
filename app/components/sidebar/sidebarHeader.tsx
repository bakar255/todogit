import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Function to display orgs's information in the sidebar

export default function SidebarHeader({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="w-full px-2 mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          {/* <Image src="" alt="Logo" width={24} height={24} /> */}
        </div>
        <div className={`flex flex-col py-4 ${isOpen ? '' : 'hidden'}`}>
          <span className="text-sm font-semibold text-gray-900">Beyond Gravity</span>
          <span className="text-xs text-gray-500">Software project</span>
          <span className="text-xs text-gray-400">{currentDate}</span>
        </div>
        <button onClick={onToggle} className="ml-auto text-gray-600 hover:text-gray-900">
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
     
    </div>
  );
}