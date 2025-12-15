 'use client'

import { useFormatDate } from "../utils/convertDate";
import { User, Bell, Search, Calendar, PanelRight} from "lucide-react"


export default function Navbar() {
  const formatDate = useFormatDate();

  return (
    <div className="w-full h-16 flex items-center justify-end px-6 border border-gray-200 relative">

      <div className="absolute left-4.5 items-center">
        <PanelRight size={22} className="cursor-pointer"/>
      </div>

        <div className="space-x-5 mr-3 flex">
        <Search size={20} className="cursor-pointer" />
        <Bell size={20} className="cursor-pointer" />
        </div>
      
      <div className="flex space-x-2 cursor-pointer rounded-sm p-2">
        
  <div className="icon-container flex-center-center rounded overflow-hidden">
  <div className="text-center full-height calendar rounded bg-white">
      <div className="nowrap text-sm font-bold bg-gray-300">Dec.</div>
      <div className="text-sm text-gray-700 font-bold">09</div>
  </div>
  </div>

      </div>
      <div className="w-9 h-9 rounded-full bg-gray-600"></div>
    </div>
  );
}
