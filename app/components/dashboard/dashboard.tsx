'use client'

import { Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import KanbanCol from "./kanbanCol";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

type TaskData = {
  title: string;
  description: string;
  priority: string;
  date: string;
};

type Task = TaskData & {
  id: string;
  status: 'todo' | 'inProgress' | 'done';
  createdAt: Date;
}

// Main dashboard

export default function Dashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [tasks, setTasks ] = useState<Task[]>([]);

  const handleTaskSubmit = (TaskData: TaskData) => {
    console.log("Données : ", TaskData);

    const newTask: Task = {
      ...TaskData,
      id: Date.now().toString(),
      status: "todo" as const,
      createdAt: new Date(),
    }
    // Add lists 
    setTasks([...tasks, newTask]);

    setIsModalOpen(false);
  }

  const todoTasks = tasks.filter(task => task.status === 'todo');
  const taskInProgress = tasks.filter (task => task.status === 'inProgress');
  const taskDone = tasks.filter (task => task.status === 'done');

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
          className="flex items-center cursor-pointer rounded-full bg-blue-600/30 shadow-lg text-white px-2 py-2"
          >  
           <Plus size={20} className="" /></button>
         
         </div>
      </div>

      <div className="border border-gray-300 mt-4 w-full rounded-full "></div>

      <div className="flex cols-span-3 space-x-4 t-4 justify-center">

      <KanbanCol
      title="To do"
      count={todoTasks.length}
      onAddTask={() => setIsModalOpen(true)} 
      >
        {todoTasks.map(task => (
          <TaskCard key={task.id} task={task}/>
        ))}
      </KanbanCol>

      <KanbanCol
      title="In progress"
      count={taskInProgress.length}
      >
        {taskInProgress.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </KanbanCol>

      <KanbanCol
      title="Done" 
      count={taskDone.length}
      >
        {taskDone.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
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