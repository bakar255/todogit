 'use client'

import { useFormatDate } from "../utils/convertDate";
import { User, Bell, Search, Calendar, PanelRight} from "lucide-react"


export default function Navbar() {
  const formatDate = useFormatDate();
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-US', { month: 'short' });
  const day = currentDate.getDate();

  return (
    <div className="w-full h-16 flex items-center justify-end px-6 border-b border-gray-200 relative">

      <div className="absolute left-4.5 items-center">
        <PanelRight size={22} className="cursor-pointer"/>
      </div>

        <div className="space-x-6 mr-3 flex">
        <Search size={20} className="cursor-pointer" />
        <Bell size={20} className="cursor-pointer" />
        </div>
      
      <div className="flex space-x-2 cursor-pointer rounded-sm p-2">
  

      </div>
    </div>
  );
}
