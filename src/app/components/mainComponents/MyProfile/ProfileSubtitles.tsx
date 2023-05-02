import React from 'react';

const Button: React.FC<{
    children: React.ReactElement | string;
    className?: string;
}> = ({ children, className }) => {
    return (
        <h2
            className={`text-2xl font-semibold dark:font-extrabold text-black dark:text-white ${className}`}
        >
            {children}
        </h2>
    );
};

export default Button;