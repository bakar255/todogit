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

        <div className="kanban-col relative w-full max-w-md mt-4">
          <div className="flex justify-between items-center w-full mb-4">

          <div className="flex space-x-3">
           <Icon size={24} className="" />
           <span className="font-bold"> {title} </span>
            {/* For each count of tasks */}
          </div>

          <div>
            <Plus size={24} className="cursor-pointer" onClick={() => onAddTask?.(id)} />
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


