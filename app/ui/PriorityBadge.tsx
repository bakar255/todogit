
export type Priority = 'low' | 'medium' | 'high';

interface PriorityProps {
    priority: Priority;
}

const priorityMap: Record<Priority, { class: string; label: string }> = {
    low: { 
      class: 'text-xs px-2 py-1 text-white border border-blue-200 rounded bg-green-400', 
      label: 'Low' 
    },
    medium: { 
      class: 'text-xs text-white px-2 py-1 rounded bg-orange-500', 
      label: 'Medium' 
    },
    high: { 
      class: 'text-xs text-white px-2 py-1 rounded border-1 bg-red-400 ', 
      label: 'High' 
    },
  };
  

export default function PriorityBadge({priority}: PriorityProps){
    const config = priorityMap[priority];
    return <span className={config.class}>{config.label}</span>
}