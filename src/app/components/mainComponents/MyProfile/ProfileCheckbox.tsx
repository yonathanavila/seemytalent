import React from 'react';

const ProfileChackbox: React.FC<{
    option?: any;
    checked?: boolean;
    className?: string;
    disabled?: boolean;
}> = ({ option, checked, className, disabled }) => {

    return (
        <div className="border dark:border-blue-500 dark:bg-blue-500 dark:bg-opacity-10 rounded-lg flex p-2 m-2">
            <label
                className={`flex items-center pr-2 text-blue-500 ${checked ? 'text-[#4C82FB]' : 'text-gray-700'}`}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    className="hidden"
                />
                <svg
                    className={`h-5 w-5 ${checked ? 'fill-current' : 'text-transparent'}`}
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414L9 11.586l-2.707-2.707a1 1 0 0 0-1.414 0z"
                    />
                </svg>
                <span className="ml-2">{option?.name}</span>
            </label>
        </div>
    );
};

export default ProfileChackbox;