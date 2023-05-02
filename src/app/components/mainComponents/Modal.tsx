import React from 'react';

const Modal: React.FC<{
    children: React.ReactElement | any;
    onClick?: () => void;
    title?: string;
    className?: string;
}> = ({ children, onClick, title, className }) => {
    return (

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-black bg-opacity-50">
            <div className="w-auto p-6 rounded-lg border border-[1px] border-[#D2D9EE] dark:border-[#2E3443] ">
                <div className="flex justify-between mb-4">
                    <p className="dark:text-[#79829E] font-semibold">{title}</p>
                    <div onClick={onClick} className="cursor-pointer text-black dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
                <div className="h-[85vh] overflow-hidden">
                    <div className="h-full overflow-y-auto overflow-x-hidden">
                        {children}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Modal;
