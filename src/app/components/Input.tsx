import React from 'react';

const CustomInput: React.FC<{
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
    name: string;
    value?: any;
    onClick?: () => void;
    disabled?: boolean;
}> = ({ onChange, type, placeholder, name, value, onClick, disabled }) => {
    return (
        <input
            onClick={onClick}
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            className={`pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20 ${disabled ? 'opacity-50' : ''}`}
            disabled={disabled}
        />
    );
};

export default CustomInput;
