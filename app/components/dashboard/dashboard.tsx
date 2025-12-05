import { Plus } from "lucide-react";

export default function Dashboard() {

  return (

    <div className="pt-6">

      <div className="flex items-center space-x-5 relative">
        <button className="text-gray-200">Board View</button>
        <button className="text-gray-200">Add view</button>

          <div className="absolute right-0 ml-2 flex items-center space-x-4">

            <span className="text-gray-400 text-sm font-bold cursor-pointer">Filter</span>
            <span className="text-gray-400 text-sm font-bold cursor-pointer">Sort</span>
            
          <button className="flex items-center cursor-pointer rounded-full bg-blue-500 text-white px-4 py-2 ml-3">  New Task <Plus size={20} className="ml-2" /></button>
         
         </div>
      </div>

      <div className="border border-gray-300 mt-4 w-full rounded-full "></div>

      <div className="flex justify-center mt-4">
        
        <div className="kanban-col relative w-full max-w-md">

          <div className="flex justify-between items-center w-full mb-4">

            <div>
             <span className="text-sm font-bold text-gray-200">To do(5)</span>
            </div>

            <div>
              <button className="flex items-center space-x-2 text-gray-200 hover:text-gray-100">
                <Plus size={20} /> 
                <span>Add New Tasks</span>
              </button>
            </div>

           
          </div>


          <div className="card-kanban w-full">

          </div>

        </div>

  
      </div>
      
    </div>
  );
}