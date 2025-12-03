import { User, Bell, Search} from "lucide-react"

export default function Dashboard() {

    return (

        <div className="md:p-8 py-4 container">
            <div className="flex items-center justify-center space-x-5 absolute right-5">
              
                 <div className="rounded-full flex items-center py-1 p-1 w-80 bg-gray-500">
               < Search  />
                <input type="text" placeholder="..." className=" ml-3 appearance-none outline-none p-2 font-bold rounded-full" />
                </div>

                <User  className="w-5 cursor-pointer text-gray-500 "/>
                <Bell  className=" w-5 cursor-pointer text-gray-500"/>
            </div>

           


            <span className="font-bold text-black text-2xl">Welcome back, Barry !</span>

        </div>

    )

}