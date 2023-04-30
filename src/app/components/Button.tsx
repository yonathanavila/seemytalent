import React from 'react';

const Button: React.FC<{
    children: React.ReactElement | any;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}> = ({ children, onClick, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`py-3 px-4 w-[90%] m-2 place-self-center block text-black dark:text-white bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition  ${className} ${disabled ? 'bg-dark-200' : ''}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;