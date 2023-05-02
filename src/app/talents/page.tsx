"use client";
import useSWR from "swr";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useEnsName, useAccount } from 'wagmi'
import CustomCard from '~/app/components/Card';
import { exampleData } from "~/root/utils/example";
import getAddress from "~/root/utils/functions/common";
import { selectTalent, clearArray, removeTalent } from "~/root/utils/slice/talents";
import { useSpring, animated, config } from '@react-spring/web';
import { useAppDispatch, useAppSelector } from "~/root/hooks/useAppDispatch";

import ProfileCard from "~/app/components/mainComponents/MyProfile/ProfileCard";


const Talents = () => {

    const talent = useAppSelector(selectTalent);
    const [isButtonSelected, setIsButtonSelected] = useState(false);
    const dispatch = useAppDispatch();

    const { address } = useAccount();
    const { data: ens } = useEnsName({ address });
    const { data: ensAvatar } = useSWR(`https://metadata.ens.domains/mainnet/avatar/${ens}`)


    const handleClick = () => {
        setIsButtonSelected(!isButtonSelected);
    };

    // React Spring animation config
    const columnAnimation = useSpring({
        width: isButtonSelected ? '70%' : '100%',
        config: isButtonSelected ? { ...config.slow, clamp: true, mass: 0.5, tension: 200 } : config.stiff,
        from: { width: '0%' },
    });

    const handleClearAll = () => {
        dispatch(clearArray());
    }

    useEffect(() => {
        if (talent.length === 0) {
            setIsButtonSelected(false);
        }
        if (talent.length === 1) {
            setIsButtonSelected(true);
        }
    }, [talent.length]);

    const handleRemove = (data: any) => {
        const foundIndex = talent.findIndex((element: any) => element.id === data?.id);

        if (foundIndex !== -1) {
            // Talent is already selected, remove it
            dispatch(removeTalent(data));
        }
    };


    const gridCols = isButtonSelected ? 'lg:grid-cols-3' : 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5';

    return (
        <>
            <div className="flex">
                <animated.div className="w-full md:w-70 lg:w-full md:w-1/2" style={columnAnimation}>

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
                    <div className="w-[40%] sticky top-0 h-screen overflow-y-auto pl-4">
                        <animated.div
                            style={{
                                ...columnAnimation,
                                marginLeft: 'auto',
                                maxHeight: '80vh', // Set the maximum height to 80% of the viewport height
                                overflowY: 'auto', // Enable vertical scrolling if content exceeds the maximum height

                            }}
                        >
                            <div className="flex flex-col justify-center items-center">

                                <CustomCard>
                                    <div className="flex justify-between mb-4">
                                        <button>Bag</button>
                                        <button onClick={handleClearAll}>Clear all</button>
                                    </div>

                                    {talent.length > 0 && talent.map((item, index) => {
                                        return (
                                            <CustomCard className={`${ens && 'bg-gradient-to-b from-[#9BB5FE] to-[#49B8F1]'}  rounded-lg border border-[1px] border-red-500 hidden sm:flex lg:mb-[10px]`}>
                                                <div className="group flex items-center">
                                                    <Image
                                                        className="shrink-0 h-12 w-12 m-2 rounded-full"
                                                        alt="profile-picture"
                                                        src={((item?.image ? item?.image : "/img/wolf.webp") || "/img/wolf.webp")}
                                                        width={80}
                                                        height={80}
                                                    />
                                                    <div className="ltr:ml-3 rtl:mr-3">
                                                        <p className="text-sm font-medium dark:text-slate-300 dark:group-hover:text-white">{(ens || getAddress(address) || "Custom text") as string}</p>
                                                    </div>
                                                </div>
                                                <button className="text-sm text-red-500 hover:text-red-700" onClick={() => handleRemove(item)}>Remove</button>
                                            </CustomCard>
                                        )
                                    })}
                                </CustomCard>
                            </div>
                        </animated.div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Talents;