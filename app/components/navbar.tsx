 'use client'

import { useFormatDate } from "../hooks/convertDate";
import { User, Bell, Search, Calendar} from "lucide-react"


export default function Navbar() {
  const formatDate = useFormatDate();

  return (
    <div className="w-full h-16 flex items-center justify-end px-6">
        
        <div className="space-x-3 mr-3 flex">
        <Search size={20} className="" />
        <Bell size={20} className="" />
        </div>
      
      <div className="flex space-x-2 cursor-pointer rounded-sm p-2">
        <Calendar size={20} />
        <span className="text-sm font-bold mr-2">{formatDate(undefined, true)}</span>
      </div>

      <div className="w-8 h-8 rounded-full bg-gray-600"></div>
    </div>
  );
}
