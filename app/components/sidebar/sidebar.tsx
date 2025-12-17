import { Grid2X2, User,  Calendar, ChartSpline, Settings2, Ellipsis } from "lucide-react"
import SidebarHeader from "./sidebarHeader";
const Icons = [
    {id: 1, icon: Grid2X2, objet: "Board"},
    {id: 2, icon: User, objet: "Backlog"},
    {id: 3, icon: Calendar, objet: "Calendar"},
    {id: 4, icon: ChartSpline, objet: "Graphique"},
    {id: 5, icon: Settings2, objet: "Paramètres"},
]

export default function Sidebar() {


    return (
      <aside className="flex flex-col w-64 min-h-screen border-r border-gray-200 bg-gray-50 py-6 px-4 space-y-4 ">
        <SidebarHeader />

        <nav className="flex flex-col w-full space-y-3">
          {Icons.map((item) => (
            <button
              key={item.id}
              className="flex cursor-pointer items-center w-full gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200/70 transition-colors"
            >
              <item.icon size={20} className="text-gray-600" />
              <span>{item.objet}</span>
            </button>
          ))}
            <div className="flex absolute bottom-4 w-full rounded py-4 px-2">
              <div className="flex justify-center items-center">
                 <div className=" rounded bg-gray-300 h-7 w-7"></div>
                <span className="text-muted-foreground text-sm ml-3">
                  Name
                </span>
                <Ellipsis size={20} className="ml-20"/>
                </div>
             </div>
        </nav>
      </aside>

    )
}