import React from 'react';

const CustomCard: React.FC<{
    children: React.ReactElement | any;
    title?: string;
    className?: string;
}> = ({ children, title, className }) => {
    return (
        <article className={`min-h-0 overflow-hidden mb-2 p-6 m-2 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border ${className}`}>
            {title && <h2 className="text-3xl font-extrabold dark:text-white">{title}</h2>}
            {children}
        </article>
    );
};

export default CustomCard;
