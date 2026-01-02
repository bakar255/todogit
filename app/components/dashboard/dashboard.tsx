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
import LabelTask from "../task/labels/LabelTask";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";

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
  createdAt: Date | string;
  sector: Sector;
  icon: React.ComponentType;
}

// Helper function to convert date strings back to Date objects
const normalizeTasks = (tasks: Task[]): Task[] => {
  return tasks.map(task => ({
    ...task,
    createdAt: typeof task.createdAt === 'string' ? new Date(task.createdAt) : task.createdAt
  }));
};

// Main dashboard
  export default function Dashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedCol, setSelectedCol] = useState<string | null >(null);
  const [filterPriority, setFilterPriority] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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

    if (isEditing && selectedTask) {
      // Update existing task
      const updatedTasks = tasks.map(task => 
        task.id === selectedTask.id 
          ? {
              ...task,
              ...TaskData,
              icon: getIconByCol(selectedCol!),
              sector: selectedCol as Sector,
              status: selectedCol as 'todo' | 'inProgress' | 'done' | 'backlog',
            }
          : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
    } else {
      // Create new task
      const newTask: Task = {
        ...TaskData,
        id: Date.now().toString(),
        icon: getIconByCol(selectedCol!),
        sector: selectedCol as Sector,
        status: selectedCol as 'todo' | 'inProgress' | 'done' | 'backlog',
        createdAt: new Date(),
      }
      setTasks([...tasks, newTask]);
    }

    setIsModalOpen(false);
    setSelectedTask(null);
    setSelectedCol(null);
  }

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setSelectedCol(task.status);
    setIsEditing(true);
    setIsModalOpen(true);
  }

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setSelectedTask(null);
  }

  const handleMoveTask = (taskId: string, newStatus: 'todo' | 'inProgress' | 'done' | 'backlog') => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId 
        ? {
            ...task,
            status: newStatus,
            sector: newStatus,
            icon: getIconByCol(newStatus),
          }
        : task
    );
    setTasks(updatedTasks);
  }

  // Normalize tasks to ensure dates are Date objects
  const normalizedTasks = normalizeTasks(tasks);

  const taskBacklog = normalizedTasks.filter( task => task.status === 'backlog' && (!filterPriority || task.priority === filterPriority));
  const todoTasksFiltered = normalizedTasks.filter(task => task.status === 'todo' && (!filterPriority || task.priority === filterPriority));
  const taskInProgressFiltered = normalizedTasks.filter (task => task.status === 'inProgress' && (!filterPriority || task.priority === filterPriority));
  const taskDoneFiltered = normalizedTasks.filter (task => task.status === 'done' && (!filterPriority || task.priority === filterPriority));

  const columns = [
    { id: 'backlog', title: 'Backlog', icon: CircleDashed, tasks: taskBacklog },
    { id: 'todo', title: 'Todo', icon: Circle, tasks: todoTasksFiltered },
    { id: 'inProgress', title: 'In progress', icon: Badge, tasks: taskInProgressFiltered },
    { id: 'done', title: 'Done', icon: BadgeCheck, tasks: taskDoneFiltered },
  ];

  return (

    <div>

     {/* Panel board */}
      <div className="flex items-center space-x-5 relative">
         <LabelTask onAddTask={() => handleAddTask('todo')} FilterPropriety={setFilterPriority} />
      </div>
         
      <div className="px-4 flex w-full justify-center space-x-4 mt-5">

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
        onClose={() => {
          setIsModalOpen(false);
          setIsEditing(false);
          setSelectedTask(null);
          setSelectedCol(null);
        }} 
      >
      <TaskForm
      onClose={() => {
        setIsModalOpen(false);
        setIsEditing(false);
        setSelectedTask(null);
        setSelectedCol(null);
      }}
      onSubmit={handleTaskSubmit}
      task={isEditing ? selectedTask : null}
      /> 

      </Modal>
      
      <TaskDetailModal 
      task={selectedTask}
      isOpen={!!selectedTask}
      onClose={() => taskOpen(null)}
      onEdit={handleEditTask}
      onDelete={handleDeleteTask}
      onMove={handleMoveTask}
      >

      </TaskDetailModal>
    </div>
  );
}