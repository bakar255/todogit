'use client'

import Modal from "../Modal";
import { Calendar, Flag, FileText, Clock } from "lucide-react";
import { useFormatDate } from "@/app/utils/convertDate";
import PriorityBadge from "./PriorityBadge";
import { Task } from "./TaskCard";
import SectorBadge from "./SectorBadge";

export type Priority = 'low' | 'medium' | 'high';



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
            <div className="space-y-6 p-3 py-3">
              <h2 className="text-foreground font-bold "> {task.title} </h2>
                <div className="space-y-6 mt-2">
              <div className="flex items-center gap-3">

             <PriorityBadge priority={task.priority} />
              <SectorBadge task.sector}  /> 
             </div>
          </div>
            
            <div>
                <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground text-gray-500 mb-2"> 
                Description
                </h4>
                <p className="text-sm text-foreground leading-relaxed">
                    {task.description}
                </p>
            </div>

            <div>
                <h4 className="text-gray-500 text-sm  font-medium uppercase  mb-2">
                Contributors
                </h4>

            </div>

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