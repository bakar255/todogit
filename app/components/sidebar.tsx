import { Circle, Grid2X2, User,  Calendar, ChartSpline, Settings2, Settings } from "lucide-react"

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
        <div className="flex flex-col w-20 space-y-5 bg-[#313131] items-center  ">  
           {Icons.map((item) =>         
          <div key={item.id} className=" mt-10">
            <item.icon className="cursor-pointer active:bg-gray-400 hover:bg-gray-400 rounded-full" />
           </div>
           )}
           <Circle className="w-15 absolute bottom-5"/>
        </div>
    )
}