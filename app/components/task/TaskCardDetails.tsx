'use client'

import Modal from "../Modal";
import { Calendar, Flag, FileText, Clock, Edit, Trash2, ArrowRight } from "lucide-react";
import { useFormatDate } from "@/app/utils/convertDate";
import PriorityBadge from "../../ui/PriorityBadge";
import { Task } from "./TaskCard";
import SectorBadge from "../../ui/SectorBadge";

export type Priority = 'low' | 'medium' | 'high';



interface TaskDetailModalProps {
    task: Task | null ;
    isOpen: boolean;
    onClose: () => void;
    onEdit?: (task: Task) => void;
    onDelete?: (taskId: string) => void;
    onMove?: (taskId: string, newStatus: 'todo' | 'inProgress' | 'done' | 'backlog') => void;
}

export default function TaskDetailModal({ task, isOpen, onClose, onEdit, onDelete, onMove }: TaskDetailModalProps) {
    const formatDate = useFormatDate();

    if(!task) return null;

    const handleDelete = () => {
        if (onDelete && window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
            onDelete(task.id);
            onClose();
        }
    };

    const getNextStatus = (currentStatus: string): 'todo' | 'inProgress' | 'done' | 'backlog' | null => {
        const statusFlow: Record<string, 'todo' | 'inProgress' | 'done' | 'backlog'> = {
            'backlog': 'todo',
            'todo': 'inProgress',
            'inProgress': 'done',
            'done': 'backlog'
        };
        return statusFlow[currentStatus] || null;
    };

    const nextStatus = getNextStatus(task.status);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="space-y-6 p-3 py-3">
              <div className="flex items-center justify-between">
                <h2 className="text-foreground font-bold "> {task.title} </h2>
                <div className="flex gap-2">
                    {onEdit && (
                        <button
                            onClick={() => {
                                onEdit(task);
                                onClose();
                            }}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Modifier"
                        >
                            <Edit size={18} />
                        </button>
                    )}
                    {onDelete && (
                        <button
                            onClick={handleDelete}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Supprimer"
                        >
                            <Trash2 size={18} />
                        </button>
                    )}
                </div>
              </div>
                <div className="space-y-6 mt-2">
              <div className="flex items-center gap-3">

             <PriorityBadge priority={task.priority} />
              <span className="sector-badge"><SectorBadge sector={task.sector} /> </span>
             </div>
          </div>
            
            <div>
                <h4 className="text-sm  text-gray-500 font-medium uppercase tracking-wide mb-2"> 
                Description
                </h4>
                <p className="text-sm  leading-relaxed">
                    {task.description || "Aucune description"}
                </p>
            </div>

            {task.date && (
                <div>
                    <h4 className="text-sm  text-gray-500 font-medium uppercase tracking-wide mb-2">
                        Date d'échéance
                    </h4>
                    <p className="text-sm leading-relaxed">
                        {new Date(task.date).toLocaleDateString('fr-FR', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                        })}
                    </p>
                </div>
            )}

            {onMove && nextStatus && (
                <div>
                    <button
                        onClick={() => {
                            onMove(task.id, nextStatus);
                            onClose();
                        }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <ArrowRight size={16} />
                        Déplacer vers {nextStatus === 'todo' ? 'À faire' : nextStatus === 'inProgress' ? 'En cours' : nextStatus === 'done' ? 'Terminé' : 'Backlog'}
                    </button>
                </div>
            )}

            <div className="absolute bottom-4 flex">
                <div>
                 <div className="border-t w-[420px] mb-2 text-gray-300"></div>
                <span className="text-sm inline-flex mr-2 text-gray-500 leading-relaxed"><Clock  className="mr-2 mt-0.5" size={18}/> Created  {formatDate(task.createdAt)}</span> 
             </div>
            </div>
            

                </div>

        </Modal>
    );
}