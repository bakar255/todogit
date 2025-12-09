import { X } from "lucide-react";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

// Components to handle generic modals behaviors 

export default function Modal ({isOpen, onClose, children } : ModalProps) {
    if(!isOpen) return null // return null

    return (
        <div
         className="fixed inset-0 bg-white-100/10 backdrop-blur-[2px] flex items-center justify-center z-50"
        onClick={onClose}
        >
            <div className="bg-white w-full max-w-lg min-h-[400px] rounded-lg shadow-xl relative p-6"
            onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button
                 onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                ><X /> </button>
            </div>
        </div>
    )
} 