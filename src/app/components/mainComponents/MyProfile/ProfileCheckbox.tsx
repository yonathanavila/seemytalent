import React from 'react';

const ProfileChackbox: React.FC<{
    className?: string;
    disabled?: boolean;
}> = ({ className, disabled }) => {

    const options = [
        { id: 1, label: 'React', checked: true },
        { id: 2, label: 'Solidity', checked: true },
        { id: 3, label: 'Typescript', checked: true }
        // Add more options as needed
    ];

    const handleCheckboxChange = (id: any) => {
        // Update the checked status of the checkbox
        const updatedOptions = options.map((option) => {
            if (option.id === id) {
                return { ...option, checked: !option.checked };
            }
            return option;
        });

        // Do something with the updated options
        console.log(updatedOptions);
    };


    return (
        <div className="flex flex-wrap justify-center">
            {options.map((option) => (
                <div key={option.id} className="border dark:border-blue-500 dark:bg-blue-500 dark:bg-opacity-10 rounded-lg flex p-2 m-2">
                    <label
                        htmlFor={`checkbox-${option.id}`}
                        className={`flex items-center pr-2 text-blue-500 ${option.checked ? 'text-[#4C82FB]' : 'text-gray-700'
                            }`}
                    >
                        <input
                            type="checkbox"
                            id={`checkbox-${option.id}`}
                            checked={option.checked}
                            onChange={() => handleCheckboxChange(option.id)}
                            className="hidden"
                        />
                        <svg
                            className={`h-5 w-5 ${option.checked ? 'fill-current' : 'text-transparent'}`}
                            viewBox="0 0 20 20"
                        >
                            {option.checked && (
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.293a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414L9 11.586l-2.707-2.707a1 1 0 0 0-1.414 0z"
                                />
                            )}
                        </svg>
                        <span className="ml-2">{option.label}</span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default ProfileChackbox;