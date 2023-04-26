import React from 'react';

const Button: React.FC<{
    children: React.ReactElement | string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}> = ({ children, onClick, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`py-3 px-4 w-[90%] m-2 place-self-center block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75 ${className} ${disabled ? 'opacity-50' : ''
                }`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;