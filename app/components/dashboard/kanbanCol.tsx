import { Plus, Circle } from "lucide-react";

interface KanbanColProps {
    id: string;
    title: string; // To do
    count: number; // (5)
    children: React.ReactNode;
    onAddTask?: (columnsId: string ) => void;
    Icon: React.ComponentType<{size?: number, className?: string}>
}

export const kanbanColumns =  [
  {id: "backlog", title: "backlog",  },
  {id: "Todo", title: "To do" },
  {id: "inProgress", title: "inProgress"},
  {id: "done", title: 'Done'},
];

// Function to handle mutiple columns as To do, InProgress, Done
export default function KanbanCol({children, id, count, title, onAddTask, Icon}: KanbanColProps ) {

    return (

        <div className="kanban-col relative w-full max-w-md mt-4 ">
          <div className="flex items-center w-full mb-4">


          <div className="flex space-x-2 justify-between rounded-t-2xl px-3 py-3 bg-gray-100 w-full ">

          <div className=" space-x-2">
             <span className="text-sm font-medium text-foreground ml-2"> {title} </span>
             <span className="rounded bg-gray-200 text-xs text-muted-foreground px-1.5 py-0.5 "> {count} </span>
          </div>

           <div className="ml-25">
              <button onClick={() => onAddTask?.(id)} className="cursor-pointer">
                <Plus size={16} className="right-0" />
              </button>
            </div>
            {/* For each count of tasks */}
          </div>

          <div>
          </div>

           <div>
          </div>
        </div>
        <div className="card-kanban w-full"> {/* Children Tasks */}
            {children}
        </div>
      </div>

      // Objectif : Permettre aux tâches d'apparaitre dans leur colonne respectif, pour chaque bouton PLUS selectionné

    );

}


