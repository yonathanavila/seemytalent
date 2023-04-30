import React from 'react';

const Button: React.FC<{
    title: string;
    children: React.ReactElement | any;
    // custom svg icon
    svg?: React.ReactElement | any;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}> = ({ title, children, svg, onClick, className, disabled }) => {

    return (
        <a className="z-0 border border-[1px] dark:border-[#2E3443] flex items-start gap-0.5 px-3 py-2 dark:bg-[#131A2A] rounded-md transition duration-150 ease-in-out cursor-pointer max-w-max m-2 animate-move-up-down transition duration-500 ease-in-out transform hover:scale-105">
            <div className="flex items-start gap-0.5 w-fit-content flex-initial">
                <div className="flex flex-row items-center overflow-hidden gap-0.5">
                    <div className="text-gray-500 text-lg leading-5">
                        {title}
                    </div>
                </div>
            </div>
            <div className="text-white text-base font-medium leading-5 ml-2">
                {children}
            </div>
            {svg}
        </a >
    );
};

export default Button;