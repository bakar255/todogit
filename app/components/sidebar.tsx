import { Circle, Grid2X2, User,  Calendar, ChartSpline, Settings2, Settings } from "lucide-react"
import Image from "next/image"
const Icons = [
    {id: 1, icon: Grid2X2},
    {id: 2, icon: User},
    {id: 3, icon: Calendar},
    {id: 4, icon: ChartSpline},
    {id: 5, icon: Settings2},
    {id: 6, icon: Settings},
]

export default function Sidebar() {


    return (
        
        <div className="py-5 w-20 space-y-5 bg-[#313131] ">  
        <div className="flex flex-col items-center">

         
           {Icons.map((item) =>         
          <div key={item.id} className=" mt-5 p-3 border-2 border-gray-300 rounded-lg bg-gray-400 cursor-pointer hover:border-gray-400">
           
            <item.icon 
            size={20 } 
            className="w-6 h-6" />
           </div>
           
           )}
           <Circle className="w-15 absolute bottom-5"/>
        </div>
        </div>

    )
}