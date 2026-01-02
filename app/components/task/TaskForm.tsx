'use client'

import { Ellipsis, GripHorizontal, Grip } from "lucide-react";
import { useState, useEffect } from "react";

// export type TaskPriority = 'low' | 'medium' |'high';

type Priority = 'low' | 'medium' | 'high';

interface TaskProps {
  onSubmit: (taskData: {
    title: string;
    description: string;
    priority: Priority;
    date: string;
  }) => void; 
  onClose: () => void;
  task?: {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    date: string;
    status: 'todo' | 'inProgress' | 'done' | 'backlog';
    sector: string;
    createdAt: Date | string;
    icon: React.ComponentType;
  } | null;
}

// Task Form for handling tasks submissions from users, including title, priority, description, dueDate etc.

export default function TaskForm({ onClose, onSubmit, task }: TaskProps) {

    const [title, setTitle ] = useState(task?.title || "");
    const [description, setDescription] = useState(task?.description || "");
    const [priority,  setPriority] = useState<Priority>(task?.priority || "high");
    const [date, setDate ] = useState(task?.date || "");

    useEffect(() => {
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setDate(task.date);
      }
    }, [task]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newTask = {
        title: title,
        description: description,
        priority: priority,
        date: date,
      }

      onSubmit(newTask);

      setTitle('');
      setDescription('');
      setPriority('low');
      setDate('');
    };

    return (
        <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{task ? "Modifier la tâche" : "Créer une nouvelle tâche"}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-black mb-2">
              Titre de la tâche
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Faire les courses"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-black mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Décrivez votre tâche..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-black mb-2">
              Priority
            </label>
            <select 
              name="priority" 
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
              className="w-full px-2 py-3 border rounded-lg border-gray-300"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium text-black mb-2">
              Date d'échéance (optionnel)
            </label>
            <input
              type="date"
              id="dueDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              name="dueDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {task ? "Enregistrer les modifications" : "Créer la tâche"}
            </button>
          </div>
        </form>
      </div>
    )

}