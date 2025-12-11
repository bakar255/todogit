import { Plus, Circle } from "lucide-react";

interface KanbanColProps {
    title: string; // To do
    count: number; // (5)
    children: React.ReactNode;
    onAddTask?: () => void;
    Icon: React.ComponentType<{size?: number, className?: string}>
}
// Function to handle mutiple columns as To do, InProgress, Done

export default function KanbanCol({children, count, title, onAddTask, Icon}: KanbanColProps ) {

  const handleClick = (title: title) => {
    

  } 

    return (

        <div className="kanban-col relative w-full max-w-md mt-4">
          <div className="flex justify-between items-center w-full mb-4">

          <div className="flex space-x-3">
           <Icon size={24} className="" />
           <span className="font-bold"> {title} </span>
            {/* For each count of tasks */}
          </div>

          <div>
            <Plus size={24} className="cursor-pointer" onClick={onAddTask} />
          </div>

           <div>
          </div>
        </div>
        <div className="card-kanban w-full"> {/* Children Tasks */}
            {children}
        </div>
      </div>


    );

}


