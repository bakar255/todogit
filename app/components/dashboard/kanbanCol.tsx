import { Plus } from "lucide-react";

interface KanbanColProps {
    title: string; // To do
    count: number; // (5)
    children: React.ReactNode;
    onAddTask?: () => void;
}


// Function to handle mutiple columns as To do, InProgress, Done

export default function KanbanCol({children, count, title, onAddTask}: KanbanColProps ) {

    return (

        <div className="kanban-col relative w-full max-w-md mt-4">

        <div className="flex justify-between items-center w-full mb-4">

          <div>
           <span className="font-bold"> {title} ({count})</span> {/* For each count of tasks */}
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


