 'use client'

import { useFormatDate } from "../../utils/convertDate";
import PriorityBadge from "../../ui/PriorityBadge";
import { SignalLow } from "lucide-react";
import { Sector } from "../../ui/SectorBadge";


type Priority = 'low' | 'medium' | 'high';

export interface Task {
    id: string;
    title: string;
    description: string;
    sector: Sector;
    priority: Priority;
    date: string;
    icon: React.ComponentType<{ className?: string, size?: string }>;
    status: 'todo' | 'inProgress' | 'done' | 'backlog';
    createdAt: Date;
}

interface TaskProps {
    task: Task;
    onTouch: () => void;
}

 // Component to handle Task card's content and descriptions

export default function TaskCard({task, onTouch }: TaskProps) {
    const formatDate = useFormatDate();

    return(
        <div 
        className="bg-white rounded-lg p-4 mb-3 shadow-lg hover:shadow-md transition-shadow relative cursor-pointer"
        onClick={onTouch}
        >
           <h3 className="ml-1 text-foreground text-sm leading-relaxed font-semibold  line-clamp-2 ">{task.title}</h3>

           <div className="mb-2 mt-2 py-0.5 px-1">

            <p className="text-xs text-muted-foreground line-clamp-2"> 
            {task.description} 
            </p>

           </div>
            
            <div className="flex">
            <span className="text-xs px-2 rounded py-1 border border-gray-200 bg-red bg-gray-100 text-gray-600 flex justify-center items-center mr-2"> <task.icon size="16" className="mr-2" />  {task.sector} </span>
  
            <span className="text-xs px-2 py-1 w-30">
               <PriorityBadge priority={task.priority} />
           </span>
            
         </div>
           
           <span className="absolute right-4 bottom-4.5 text-xs text-gray-500 rounded bg-gray-100 p-2 py-1">
               {formatDate(task.createdAt)}
           </span>
        </div>
    )
}
