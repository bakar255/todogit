'use client'

import { Plus, Ellipsis, GripHorizontal, Grip,  } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import KanbanCol from "./kanbanCol";

export default function Dashboard() {


  const [isModalOpen, setIsModalOpen] = useState(false); 

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
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Créer une nouvelle tâche</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-black mb-2">
                Titre de la tâche
              </label>
              <input
                type="text"
                id="title"
                name="title"
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
                className="w-full px-2 py-3 border-1 rounded-lg border-gray-300"
              >
                <option value="Low" className=""> <Ellipsis /> Low</option>
                <option value="Medium"> <GripHorizontal  className="bg-amber-400"/> Medium</option>
                <option value="High" selected>High</option>
              </select>
            </div>

            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium text-black mb-2">
                Date d'échéance (optionnel)
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Créer la tâche
              </button>
            </div>
          </form>
        </div>
      </Modal>
      
    </div>
  );
}