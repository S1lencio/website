import React from "react";

type GenericCardProps = {
    children: React.ReactNode;
    className?: string; // To add any custom classes
};

const GenericCard = ({ children, className }: GenericCardProps) => {
    return (
        <div className={`bg-neutral-800 p-4 rounded-lg shadow-lg mt-4 ${className}`}>
            {children}
        </div>
    );
};

export default GenericCard;
