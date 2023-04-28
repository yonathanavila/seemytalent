"use client";
import { addTalent, selectTalent } from "@/utils/slice/talents";

import ProfileCard from "../components/MainComponents/MyProfile/ProfileCard";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { exampleData } from "@/utils/example";
import { useState } from "react";

const Talents = () => {

    const talent = useAppSelector(selectTalent);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDivClick = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-2 my-2">
                {exampleData.length > 0 && exampleData.map((item, index) => {
                    return (
                        <ProfileCard data={item} key={index} className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                    )
                })}

                {talent.length > 0 && (
                    <div className="relative">
                        <div className="fixed bottom-0 right-0">
                            <span
                                className="absolute bottom-0 right-0 px-2 py-1 m-4 text-white rounded-full text-2xl hover:animate-bounce hover:cursor-pointer"
                                onClick={handleDivClick}
                                style={{ zIndex: 10 }} // Set a higher z-index value for the div
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                                {talent.length}
                            </span>
                        </div>

                        {isModalOpen && (
                            // Render your modal component here
                            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                                <h1>Modal</h1>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </>
    )
}

export default Talents;