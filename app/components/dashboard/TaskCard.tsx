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
}

export default function TaskCard({task}: TaskProps) {
    return(
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow">
           <h3 className="text-lg font-bold text-black mb-2">{task.title}</h3>
           {task.description && (
               <p className="text-sm text-gray-600 mb-2">{task.description}</p>
           )}
           <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
               {task.priority}
           </span>
        </div>
    )
}
