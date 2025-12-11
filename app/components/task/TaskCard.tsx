 'use client'

import { useFormatDate } from "../../utils/convertDate";
import PriorityBadge from "./PriorityBadge";
import { SquareLibrary ,Circle, Badge, BadgeCheck, Plus } from "lucide-react";



type Priority = 'low' | 'medium' | 'high';

interface Task {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    date: string;
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
           <h3 className="text-black mb-2">{task.title}</h3>
            
            <div className="flex">
            <span className="text-xs px-2 rounded py-1 border border-gray-200 bg-red bg-gray-100 text-gray-600 flex justify-center items-center mr-2"> <Circle size={15} className="mr-1"/> Todo</span>

            <span className="text-xs px-2 py-1 w-30">
               <PriorityBadge priority={task.priority} />
           </span>
            
         </div>
           
           <span className="absolute right-4 bottom-4 text-xs text-gray-500">
               {formatDate(task.createdAt)}
           </span>
        </div>
    )
}
