import React from 'react';

const Button: React.FC<{
    title: string;
    value: any;
    // custom svg icon
    svg?: React.ReactElement | any;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}> = ({ title, value, onClick, className, disabled }) => {

    return (
        <>
            <div className="flex items-start gap-0.5 w-fit-content flex-initial">
                <div className="flex flex-row items-center overflow-hidden gap-0.5">
                    <div className="text-gray-500 text-lg leading-5">
                        {title}
                    </div>
                </div>
            </div>
            <textarea className="flex items-start gap-0.5 px-3 py-2 border border-gray-300 dark:bg-[#131A2A] rounded-md transition duration-150 ease-in-out cursor-pointer max-w-max m-2 animate-move-up-down transition duration-500 ease-in-out transform hover:scale-105" value={value} />
        </>
    );
};

export default Button;