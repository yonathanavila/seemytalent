"use client";
import { useState } from "react";
import { exampleData } from "~/root/utils/example";
import { selectTalent } from "~/root/utils/slice/talents";
import { useAppSelector } from "~/root/hooks/useAppDispatch";
import { useSpring, animated, config } from '@react-spring/web';
import ProfileCard from "~/app/components/mainComponents/MyProfile/ProfileCard";

const Talents = () => {

    const talent = useAppSelector(selectTalent);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isButtonSelected, setIsButtonSelected] = useState(false);

    const handleClick = () => {
        setIsButtonSelected(!isButtonSelected);
    };

    // React Spring animation config
    const columnAnimation = useSpring({
        width: isButtonSelected ? '70%' : '100%',
        config: config.stiff,
    });

    const gridCols = isButtonSelected ? 'lg:grid-cols-3' : 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5';

    return (
        <>
            <div>
                <button onClick={handleClick}>Toggle Columns</button>

                <div className="flex">
                    <animated.div className="w-full md:w-1/2" style={columnAnimation}>

                        <div className={`grid ${gridCols} sm:grid-cols-1 gap-2 m-2`}>
                            {exampleData.length > 0 && exampleData.map((item, index) => {
                                return (
                                    <ProfileCard data={item} key={index} className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                                )
                            })}

                            {talent.length > 0 && (
                                <div className="relative" onClick={handleClick}>
                                    <div className="fixed bottom-0 right-0">
                                        <span
                                            className="absolute bottom-0 right-0 px-2 py-1 m-4 text-black dark:text-white rounded-full text-2xl hover:animate-bounce hover:cursor-pointer"
                                            style={{ zIndex: 10 }} // Set a higher z-index value for the div
                                        >
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                            </span>
                                            {talent.length}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </animated.div>
                    {isButtonSelected && (
                        <animated.div
                            className="w-full md:w-1/2"
                            style={{ ...columnAnimation, marginLeft: 'auto' }}
                        >
                            <h2>Bag is...</h2>
                        </animated.div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Talents;