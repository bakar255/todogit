import { Plus } from "lucide-react";

interface KanbanColProps {
    count: number;
    children: React.ReactNode;
    onAddTask?: () => void;
}

export default function KanbanCol({children, count, onAddTask}: KanbanColProps ) {

    return (

        <div className="kanban-col relative w-full max-w-md mt-4">

        <div className="flex justify-between items-center w-full mb-4">

          <div>
           <span className="text-sm font-bold text-black">To do({count})</span> {/* For each count of tasks */}
          </div>

          <div>
            <button
             onClick={onAddTask}
             className="flex items-center space-x-2 text-white cursor-pointer shadow-lg bg-blue-600/30  rounded-full p-2  hover:text-gray-100">
              
              <span className="text-white">Add New Tasks</span> {/* Button add New Task */}
              <Plus size={23}
              className=" rounded-full"
              /> 
            </button>
          </div>
        </div>

        <div className="card-kanban w-full"> {/* Children Tasks */}
            {children}
        </div>
      </div>


    );

}


