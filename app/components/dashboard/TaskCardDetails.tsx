'use client'

import { useState } from "react";
import { useFormatDate } from "../../hooks/convertDate";
import Modal from "../Modal";
import { Calendar, Flag, FileText } from "lucide-react";

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
    const formatDate = useFormatDate();
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    return(
        <>
            {/* Card compacte */}
            <div 
                className="bg-white rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow relative cursor-pointer"
                onClick={() => setIsDetailOpen(true)}
            >
                <h3 className="text-lg font-bold text-black mb-2">{task.title}</h3>
                {task.description && (
                    <p className="text-sm mb-2 text-gray-600 line-clamp-2">{task.description}</p>
                )}
                <div className="flex items-center justify-between mt-3">
                    <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                        {task.priority}
                    </span>
                    <span className="text-xs text-gray-500">
                        {formatDate(task.createdAt)}
                    </span>
                </div>
            </div>

            {/* Modal avec les détails */}
            <Modal isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)}>
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
        </>
    )
}