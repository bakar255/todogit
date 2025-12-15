'use client'

import { CircleDashed ,Circle, Badge, BadgeCheck, Plus, Search } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import KanbanCol from "./kanbanCol";
import TaskForm from "../task/TaskForm";
import TaskCard from "../task/TaskCard";
import TaskDetailModal from "../task/TaskCardDetails";
import { kanbanColumns } from "./kanbanCol";
import { Button } from "@/app/ui/Button";

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

    <div className="">

      <div className="flex items-center space-x-5 relative">

         
      </div>

          {/* Panel board */}
          <div className="flex px-16 border-b border-gray-200 h-16 items-center justify-end space-x-5">
  
           {/* Label Input  */}
          <div className=" flex items-center ">
            <input type="text" 
            className="flex  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-9 w-[180px] rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background" />
           <Search/>
        </div>

          {/* Label priority filter */}
        <div className=" rounded-md px-4 py-2 bg-gray-100 cursor-pointer ">  
          <label htmlFor="" className=" text-sm w-32">

            <select name="" id="">
             
            <option value="Highest">Priority</option>
            <option value="Highest">Highest</option>
            <option value="Medium">Medium</option>
            <option value="Lowest>">Lowest</option>
            </select>
          </label>
        </div>

          <button 
          onClick={() => handleAddTask('todo')}
          className="flex items-center text-sm cursor-pointer rounded bg-blue-400 shadow-lg text-foreground px-4 py-2"
          >  
           <Plus size={20} className="text-foreground" /> Add New Task</button>
         

            <div>

              </div>
       </div>

      <div className=" ml-10 flex cols-span-3 space-x-2 t-4 mt-5">

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