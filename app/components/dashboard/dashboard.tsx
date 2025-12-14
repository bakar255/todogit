'use client'

import { CircleDashed ,Circle, Badge, BadgeCheck, Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import KanbanCol from "./kanbanCol";
import TaskForm from "../task/TaskForm";
import TaskCard from "../task/TaskCard";
import TaskDetailModal from "../task/TaskCardDetails";
import { kanbanColumns } from "./kanbanCol";

type Priority = 'low' | 'medium' | 'high';
type Sector = 'todo' | 'inProgress' | 'done' | 'backlog';

type TaskData = {
  title: string;
  description: string;
  priority: Priority;
  date: string;
};

type Task = TaskData & {
  id: string;
  status: 'todo' | 'inProgress' | 'done' | 'backlog';
  createdAt: Date;
  sector: Sector;
  icon: React.ComponentType;
}

// Main dashboard
  export default function Dashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [tasks, setTasks ] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedCol, setSelectedCol] = useState<string | null >(null);


  const taskOpen = (task:Task | null) => {  // TaskCardDetails open tasks
    setSelectedTask(task);
  }

   const handleAddTask = (columnsId: string) => {
    setSelectedCol(columnsId)
    setIsModalOpen(true);
   }

   const getIconByCol = (columnsId:string) => {
    switch(columnsId) {
      case 'backlog': 
      return CircleDashed;
      case "todo": 
      return Circle;
      case "inProgress":
      return Badge
      case "done":
      return BadgeCheck;
      default: return Circle;
    }
   };

  const handleTaskSubmit = (TaskData: TaskData) => {
    console.log("Données : ", TaskData);

    const newTask: Task = {
      ...TaskData,
      id: Date.now().toString(),
      icon: getIconByCol(selectedCol!),
      sector: selectedCol as Sector,
      status: selectedCol as 'todo' | 'inProgress' | 'done' | 'backlog',
      createdAt: new Date(),
    }
    // Add lists 
    setTasks([...tasks, newTask]);

    setIsModalOpen(false);
  }

  const todoTasks = tasks.filter(task => task.status === 'todo');
  const taskInProgress = tasks.filter (task => task.status === 'inProgress');
  const taskDone = tasks.filter (task => task.status === 'done');
  const taskBacklog = tasks.filter( task => task.status === 'backlog');

  const columns = [
    { id: 'backlog', title: 'Backlog', icon: CircleDashed, tasks: taskBacklog },
    { id: 'todo', title: 'Todo', icon: Circle, tasks: todoTasks },
    { id: 'inProgress', title: 'In progress', icon: Badge, tasks: taskInProgress },
    { id: 'done', title: 'Done', icon: BadgeCheck, tasks: taskDone },
  ];

  return (

    <div className="pt-6">

      <div className="flex items-center space-x-5 relative">
        <button className=""> Board View</button>

          <div className="absolute right-0 ml-2 flex items-center space-x-4">

            <span className="text-gray-400 text-sm font-medium cursor-pointer">Filter</span>
            
          <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center cursor-pointer rounded-full bg-blue-600/30 shadow-lg text-white px-2 py-2"
          >  
           <Plus size={20} className="" /></button>
         
         </div>
      </div>

      <div className="border border-gray-300 mt-4 w-full rounded-full "></div>

      <div className="flex cols-span-3 space-x-4 t-4 justify-center">

        {columns.map(col => (
          <KanbanCol
            key={col.id}
            id={col.id}
            title={col.title}
            Icon={col.icon}
            count={col.tasks.length}
            onAddTask={handleAddTask}
          >
            {col.tasks.map(task => (
              <TaskCard key={task.id} task={task} onTouch={() => taskOpen(task)}/>
            ))}
          </KanbanCol>
        ))}

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
      
      <TaskDetailModal 
      task={selectedTask}
      isOpen={!!selectedTask}
      onClose={() => taskOpen(null)}
      >

      </TaskDetailModal>
    </div>
  );
}