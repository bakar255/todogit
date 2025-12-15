import React from "react";

interface ButtonProps 

    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        title: string;
        onClick: () => void;
    }


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({title, className="", onClick, ...props }, ref) => {
        return (
            <button
            ref={ref}
            className={` btn ${className}`}
            {...props}
            >
            {title}
            </button>
        )
    }
    
)