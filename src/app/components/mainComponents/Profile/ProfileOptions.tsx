import React from 'react';

const ProfileOptions: React.FC<{
    className?: string;
    disabled?: boolean;
}> = ({ className, disabled }) => {
    return (
        <div className=" m-0 p-0 min-h-0 w-full h-min-content mt-[70px]">
            <div className="lg:-ml-12 lg:-mr-12 py-0 lg:px-24 flex flex-row items-center justify-start gap-6 overflow-auto ">
                <button className="block outline-none border-none p-0 m-0 bg-none text-gray-400 lg:text-lg transition-all duration-150 ease-in-out cursor-pointer hover:text-[#6BA6FE]">
                    Profile
                </button>
                <button className="block outline-none border-none p-0 m-0 bg-none text-gray-400 lg:text-lg transition-all duration-150 ease-in-out cursor-pointer hover:text-[#6BA6FE]">
                    Records
                </button><button className="block outline-none border-none p-0 m-0 bg-none text-gray-400 lg:text-lg transition-all duration-150 ease-in-out cursor-pointer hover:text-[#6BA6FE]">
                    Meeting
                </button>
                <button className="ml-auto block outline-none border-none p-0 m-0 bg-none text-gray-400 lg:text-lg transition-all duration-150 ease-in-out cursor-pointer hover:text-[#6BA6FE]">
                    Export CV
                </button>

            </div>

        </div>
    );
};

export default ProfileOptions;