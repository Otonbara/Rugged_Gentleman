import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded font-bold mt-2"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;