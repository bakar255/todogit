import Image from "next/image";

// Function to display orgs's information in the sidebar

export default function SidebarHeader() {
  
  return (
    <div className="w-full px-2 mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          {/* <Image src="" alt="Logo" width={24} height={24} /> */}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">Beyond Gravity</span>
          <span className="text-xs text-gray-500">Software project</span>
        </div>
      </div>
      <div className="mt-4 text-xs font-semibold text-gray-500 tracking-wide">
        PLANNING
      </div>
    </div>
  );
}