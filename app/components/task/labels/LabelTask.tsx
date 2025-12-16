import { Kanban, Rows3, Search, Plus ,CircleDashed ,Circle, Badge, BadgeCheck } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { kanbanColumns } from "../../dashboard/kanbanCol"

interface LabelProps {
  onAddTask?: () => void;
  FilterPropriety: (Priority: string) => void;
} 

export default function LabelTask({onAddTask, FilterPropriety}: LabelProps) {

    const [selectedCol, setSelectedCol] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState("");

              return (
             <div className="flex w-full px-16 border-b border-gray-200 h-16 items-center justify-end space-x-5">
                      {/* Display task card  */}
                        <div className="bg-gray-200 px-2 rounded-sm space-x-1 py-1 items-center ">
                            <button className="focus:bg-white text-foreground cursor-pointer rounded-sm px-1 py-1 "> <Kanban  size={19}/> </button>
                            <button className="focus:bg-white text-foreground cursor-pointer rounded-sm py-1 px-1"  > <Rows3  size={19}/> </button>
                        </div>
              
                       {/* Label Input  */}
                      <div className=" relative flex focus-visible:ring-offset-2 h-9 w-[180px] rounded-md border px-3 py-2 ">
                        <input type="text" 
                        className=" focus-visible:outline-none focus-visible:ring-ring  disabled:cursor-not-allowed " />
                       <Search className="text-foreground right-1 absolute" size={17}/>
                       </div>
            
                      {/* Label priority filter */}
                      <div className=" rounded-md px-4 py-2 bg-gray-100 cursor-pointer ">  
                        <select 
                        name="Filter"
                        value={selectedOption}  
                        onChange={(e) => {
                          setSelectedOption(e.target.value);
                          FilterPropriety(e.target.value);
                        }} 
                        >
                        <option value="">All</option>
                        <option value="high">Highest</option>
                        <option value="medium">Medium</option>
                        <option value="low">Lowest</option>
                        </select>

                    </div>
                      
                      {/* Add task button */}
                      <button 
                      onClick={() => onAddTask?.()}
                      className="flex items-center text-sm cursor-pointer rounded bg-blue-400 shadow-lg text-foreground px-4 py-2"
                      >  
                       <Plus size={16} className="mr-1 text-foreground" /> Add New Task</button>
                        <div>

                          </div>
                   </div>
            
       
    )

}