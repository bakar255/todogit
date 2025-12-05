import { User, Bell, Search, Calendar} from "lucide-react"


export default function Navbar() {

  return (
    <div className="w-full h-16 flex items-center justify-end px-6 border-b border-gray-700 bg-[#1f1f1f]">
      <Search size={20} className="btn-gray" />
      <Bell size={20} className="btn-gray" />
      <div className="flex space-x-3 cursor-pointer rounded-sm hover:bg-gray-700 p-2">
        <Calendar size={20} className="btn-gray" />
        <span className="text-gray-300 text-sm font-bold">04 Nov 2025</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-400"></div>
    </div>
  );
}
