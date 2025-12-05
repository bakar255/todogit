'use client'

import { Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";

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

      <div className="flex cols-span-3 space-x-4 t-4">
        
        <div className="kanban-col relative w-full max-w-md mt-4">

          <div className="flex justify-between items-center w-full mb-4">

            <div>
             <span className="text-sm font-bold text-black">To do(0)</span>
            </div>

            <div>
              <button className="flex items-center space-x-2 text-white cursor-pointer shadow-lg bg-blue-600/30  rounded-full p-2  hover:text-gray-100">
                <span className="text-white">Add New Tasks</span>
                <Plus size={23}
                className=" rounded-full"
                /> 
              </button>
            </div>

           
          </div>


          <div className="card-kanban w-full">

          </div>

        </div>

  
      </div>

      {
        <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} 
        >
        </Modal>
      }
      
    </div>
  );
}