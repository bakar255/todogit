import { Circle, Grid2X2, User,  Calendar, ChartSpline, Settings2, Settings } from "lucide-react"
import Image from "next/image"
const Icons = [
    {id: 1, icon: Grid2X2, objet: "Roadmap"},
    {id: 2, icon: User, objet: "Backlog"},
    {id: 3, icon: Calendar, objet: "Calendar"},
    {id: 4, icon: ChartSpline, objet: "Graphique"},
    {id: 5, icon: Settings2, objet: "Paramètres"},
]

export default function Sidebar() {


    return (
        
        <div className="py-6 w-50 space-y-5 px-5 mt-12 border-r border-t border-2 border-gray-300">  
        <div className="flex flex-col items-center">
           {Icons.map((item) =>         
          <div key={item.id} className=" mt-5 w-full px-2 py-3">

            <div className="items-center flex rounded-lg hover:bg-gray-200 w-full">
            <button 
            className="flex px-2 py-3 rounded-lg text-1xl font-bold"           
            >
            <item.icon 
            size={20 } 
            className="w-6 h-6 mr-2" 
            />
             {item.objet}
              </button>

            </div>
           </div>
           )}
           <Circle className="w-15 absolute bottom-5"/>
        </div>
        </div>

    )
}