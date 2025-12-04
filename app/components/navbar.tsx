import { User, Bell, Search, Calendar} from "lucide-react"


export default function Navbar() {

    return (
            <div className="flex items-center justify-center space-x-5 absolute right-5 py-6">
            
               <Search size={20} className="btn-gray" />

                <Bell size={20}  className="btn-gray"/>
                 
                <div className="flex space-x-3 cursor-pointer rounded-sm hover:bg-gray-300 p-2">
                    <Calendar size={20} className="btn-gray"/>
                <span className="text-gray-300 text-sm font-bold">04 Nov 2025</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-400 ">
            </div>
                
            </div>
    )

}