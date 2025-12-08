 'use client'

import { useFormatDate } from "../../hooks/convertDate";

interface Task {
    id: string;
    title: string;
    description: string;
    priority: string;
    date: string;
    status: 'todo' | 'inProgress' | 'done';
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
        className="bg-white rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow relative cursor-pointer"
        onClick={onTouch}
        >
           <h3 className="text-lg font-bold text-black mb-2">{task.title}</h3>
           {task.description && (
               <p className="text-sm mb-2">{task.description}</p>
           )}
           <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
               {task.priority}
           </span>
           <span className="absolute right-4 bottom-4 text-xs text-gray-500">
               {formatDate(task.createdAt)}
           </span>
        </div>
    )
}
