"use client";
import { addTalent, selectTalent } from "@/utils/slice/talents";

import ProfileCard from "../components/MainComponents/MyProfile/ProfileCard";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { exampleData } from "@/utils/example";

const Talents = () => {

    const talent = useAppSelector(selectTalent);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-2 my-2">
                {exampleData.length > 0 && exampleData.map((item, index) => {
                    return (
                        <ProfileCard data={item} key={index} className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                    )
                })}

                <div className="fixed bottom-0 right-0 ">

                    <span className="absolute bottom-0 right-0 px-2 py-1 m-4 text-white rounded-full text-2xl hover:animate-bounce hover:cursor-pointer">

                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        {talent.length > 0 && talent.length}
                    </span>
                </div>


            </div>
        </>
    )
}

export default Talents;