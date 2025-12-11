
export type Priority = 'low' | 'medium' | 'high';

interface PriorityProps {
    priority: Priority;
}

const priorityMap: Record<Priority, { class: string; label: string }> = {
    low: { 
      class: 'text-xs px-2 py-1 border border-blue-200 rounded bg-blue-100', 
      label: 'Low' 
    },
    medium: { 
      class: 'text-xs px-2 py-1 border border-amber-200 rounded bg-orange-200 ', 
      label: 'Medium' 
    },
    high: { 
      class: 'text-xs px-2 py-1 border border-red-200 rounded bg-red-300 ', 
      label: 'High' 
    },
  };
  

export default function PriorityBadge({priority}: PriorityProps){
    const config = priorityMap[priority];
    return <span className={config.class}>{config.label}</span>
}