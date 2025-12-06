

interface Task {
    id: string;
    title: string;
    assignement: string;
}

interface TaskProps {
    task: Task;
}

// Enfaite il ya la column, ou tu remplis de taskCard, mais pour remplir les tasks cards dynamiquement pour chaque card 
// Comme titre, prorité, assignement de la tâche. Donc on fais une interface Task ou il y'aura les params a remplir.
// 

export default function TaskCard({task}: TaskProps) {

    return(
        <div className="bg-white">
           <span className="text-sm text-black font-bold text-2xl"> {task.title} </span>
        </div>
    )

}

