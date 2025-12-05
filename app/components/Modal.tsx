

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal ({isOpen, onClose, children } : ModalProps) {
    if(!isOpen) return null // return null

    return (
        <div className="fixed inset-0 bg-gray-500/15 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-126  min-h-[127px] max-w-md rounded-lg shadow-xl relative p-6">
                {children}
                <button
                 onClick={onClose}
                className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >x</button>
            </div>
        </div>
    )
} 