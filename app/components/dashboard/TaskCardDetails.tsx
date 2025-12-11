'use client'

import Modal from "../Modal";
import { Calendar, Flag, FileText } from "lucide-react";
import { useFormatDate } from "@/app/utils/convertDate";

interface Task {
    id: string;
    title: string;
    description: string;
    priority: string;
    date: string;
    status: 'todo' | 'inProgress' | 'done';
    createdAt: Date;
}

interface TaskDetailModalProps {
    task: Task | null ;
    isOpen: boolean;
    onClose: () => void;
}

export default function TaskDetailModal({ task, isOpen, onClose }: TaskDetailModalProps) {
    const formatDate = useFormatDate();

    if(!task) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{task.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            Créé le {formatDate(task.createdAt, true)}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            task.status === 'todo' ? 'bg-gray-100 text-gray-700' :
                            task.status === 'inProgress' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                        }`}>
                            {task.status === 'todo' ? 'À faire' :
                             task.status === 'inProgress' ? 'En cours' : 'Terminé'}
                        </span>
                    </div>
                </div>

                {/* Description */}
                {task.description && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <FileText size={18} className="text-gray-600" />
                            <h3 className="font-semibold text-gray-900">Description</h3>
                        </div>
                        <p className="text-gray-700 pl-6">{task.description}</p>
                    </div>
                )}

                {/* Priority */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Flag size={18} className="text-gray-600" />
                        <h3 className="font-semibold text-gray-900">Priorité</h3>
                    </div>
                    <span className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-800 ml-6">
                        {task.priority}
                    </span>
                </div>

                {/* Date */}
                {task.date && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Calendar size={18} className="text-gray-600" />
                            <h3 className="font-semibold text-gray-900">Date</h3>
                        </div>
                        <p className="text-gray-700 pl-6">{task.date}</p>
                    </div>
                )}
            </div>
        </Modal>
    );
}