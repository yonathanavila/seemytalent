import React from 'react';

const CustomCard: React.FC<{
    children: React.ReactElement | any;
    title?: string;
    className?: string;
}> = ({ children, title, className }) => {
    return (
        <div className={`bg-[#F5F6FC] dark:bg-[#131A2A] text-black dark:text-white lg:mb-[40px] rounded-3xl min-h-0 overflow-hidden my-4 lg:mx-2 p-6 lg:m-2 rounded-xl flex flex-col bg-clip-border ${className}`}>
            {title && <h2 className="text-3xl font-extrabold dark:text-white">{title}</h2>}
            {children}
        </div>
    );
};

export default CustomCard;
