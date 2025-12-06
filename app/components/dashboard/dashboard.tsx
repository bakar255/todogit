'use client'

import { Plus, Ellipsis, GripHorizontal, Grip,  } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import KanbanCol from "./kanbanCol";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

export default function Dashboard() {


  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [tasks, setTasks ] = useState([]);

  const handleTaskSubmit = (taskData) => {
    console.log("Données : ", taskData);

    const newTask = {
      ...taskData,
      id: Date.now().toString(),
    }
    // Add lists 
    setTasks([...tasks, newTask]);

    setIsModalOpen(false);
  }


  return (

    <div className="pt-6">

      <div className="flex items-center space-x-5 relative">
        <button
         className="text-gray-500"
        
        >
          Board View</button>
        <button className="text-gray-500">Add view</button>

          <div className="absolute right-0 ml-2 flex items-center space-x-4">

            <span className="text-gray-400 text-sm font-bold cursor-pointer">Filter</span>
            
          <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center cursor-pointer rounded-full bg-blue-600/30 shadow-lg text-white px-4 py-2 ml-3"
          >  
          New Task <Plus size={20} className="ml-2" /></button>
         
         </div>
      </div>

      <div className="border border-gray-300 mt-4 w-full rounded-full "></div>

      <div className="flex cols-span-3 space-x-4 t-4 justify-center">

      <KanbanCol
      title =  "To do"
      count={0}
      onAddTask={() => setIsModalOpen(true)} 
      >
      </KanbanCol>

      <KanbanCol
      title = "In progress"
      count={0}
      >
      </KanbanCol>

      <KanbanCol
      title = "Done"
      count={0}
      >
      </KanbanCol>

     </div>
        
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} 
      >
      <TaskForm
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleTaskSubmit}
      /> 

      </Modal>
      
    </div>
  );
}