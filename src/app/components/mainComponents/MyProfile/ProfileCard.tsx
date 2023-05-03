import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEnsName, useAccount } from 'wagmi'
import React, { useRef, useState, useEffect } from 'react';

import ProfileModal from "./ProfileModal";
import Button from "~/app/components/Button";
import CustomCard from '~/app/components/Card';
import { IProfileBasic } from "~/root/utils/types";
import getAddress from "~/root/utils/functions/common";
import Modal from "~/app/components/mainComponents/Modal";
import CopyToClipboardButton from "~/app/components/CopyToClipboardButton";
import { useAppDispatch, useAppSelector } from "~/root/hooks/useAppDispatch";
import ProfileInput from "~/app/components/mainComponents/MyProfile/ProfileInput";
import OptionsProfile from '~/app/components/mainComponents/MyProfile/ProfileOptions';
import ProfileSubtitles from "~/app/components/mainComponents/MyProfile/ProfileSubtitles";
import { selectTalent, addTalent, removeTalent, clearArray } from "~/root/utils/slice/talents";

const baseURI = process.env.NEXT_PUBLIC_BASE_API || "";

const ProfileCard: React.FC<{
    data: IProfileBasic;
    onlyRead?: boolean;
    className?: string;
    disabled?: boolean;
}> = ({ data, onlyRead, className, disabled }) => {

    const router = useRouter();
    const modalRef: any = useRef();
    const [roomId, setRoomId] = useState<any>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMessageOpen, setMessageOpen] = useState(false);
    const [isSelected, setIsSelected] = useState<any>(undefined);
    const toggleModal = () => {
        console.log("toggleModal");
        setIsModalOpen(!isModalOpen);
    };

    // wagmi hooks
    const { address } = useAccount();
    const { data: ens } = useEnsName({ address });
    const { data: ensAvatar } = useSWR(`https://metadata.ens.domains/mainnet/avatar/${ens}`)

    const showMessageModal = () => {
        setMessageOpen(!isMessageOpen);
    };

    const dispatch = useAppDispatch();
    const talent: any = useAppSelector(selectTalent);

    useEffect(() => {
        if (talent.length > 0) {
            const found = talent.find((element: any) => element.id === data?.id);
            setIsSelected(found?.id ? found : undefined);
        }
        if (talent.length === 0) setIsSelected(undefined);
    }, [talent, data?.id]);

    useEffect(() => {
        const getRoomId = async () => {
            try {
                const response = await fetch(`${baseURI}/create-room`, {
                    method: "GET",
                });
                const data = await response.json();
                setRoomId(data?.data?.roomId);

            } catch (error) {
                throw new Error(error);
            }
        }
        getRoomId()
    }, [data?.id])

    const handlePool = (data: any) => {
        const foundIndex = talent.findIndex((element: any) => element.id === data?.id);

        if (foundIndex !== -1) {
            // Talent is already selected, remove it
            dispatch(removeTalent(data));

            if (talent.length === 1) {
                setIsSelected(undefined);
                // If the last talent is being removed, clear the talent array
                dispatch(clearArray());
            }
        } else {
            // Talent is not selected, add it
            dispatch(addTalent(data));
        }
    };

    return (
        <div className={`${className} relative group`} onClick={() => handlePool(data)}>
            <div className={`${onlyRead && ((isSelected?.id ? 'transition-opacity duration-300 ease-in-out opacity-75 hover:cursor-pointer' : 'transition-opacity duration-300 ease-in-out hover:opacity-75 hover:cursor-pointer'))}`}>
                {!onlyRead && (<OptionsProfile Arrayfunction={[showMessageModal]} />)}
                {isMessageOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 shadow-md" ref={modalRef}>
                        <div className="w-[322px] h-[310px] shadow-md bg-white dark:bg-[#0D111C] rounded-lg border border-[1px] border-[#D2D9EE] dark:border-[#2E3443] relative ">
                            <div className="flex justify-between m-4">
                                <p className="text-black dark:text-[#79829E] font-semibold">Room</p>
                                <div onClick={showMessageModal} className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                            </div>
                            <Button onClick={() => router.push('/interview/' + roomId)} className="flex items-center justify-center absolute bottom-0" >

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                                    <path d="M12 1v6m0 0v6m0-6h6m-6 0H6"></path>
                                    <circle cx="18" cy="12" r="1"></circle>
                                    <circle cx="6" cy="12" r="1"></circle>
                                    <circle cx="12" cy="18" r="1"></circle>
                                    <circle cx="12" cy="6" r="1"></circle>
                                </svg>
                                Enter to the room
                            </Button>
                        </div>
                    </div>
                )}

                <CustomCard className={`${ens && 'bg-gradient-to-b from-[#9BB5FE] to-[#49B8F1]'} ${(isSelected?.id && onlyRead) && 'rounded-lg border border-[1px] border-red-500'}`}>
                    <div className="group flex items-center">
                        <Image
                            className="shrink-0 h-12 w-12 m-2 rounded-full"
                            alt="profile-picture"
                            src={((data?.image ? data?.image : "/img/wolf.webp") || "/img/wolf.webp")}
                            width={80}
                            height={80}
                        />
                        <div className="ltr:ml-3 rtl:mr-3">
                            <p className="text-sm font-medium dark:text-slate-300 dark:group-hover:text-white">{(ens || getAddress(address) || "Custom text") as string}</p>
                        </div>
                    </div>
                </CustomCard>
                <CustomCard className={`dark:bg-[#131A2A] ${(isSelected?.id && onlyRead) && 'rounded-lg border border-[1px] border-red-500'}`}>

                    <ProfileSubtitles>
                        Address
                    </ProfileSubtitles>
                    <CopyToClipboardButton>
                        {address || "Custom text"}
                    </CopyToClipboardButton>
                    <br />
                    <ProfileSubtitles>
                        Experience
                    </ProfileSubtitles>
                    <div className="flex flex-wrap justify-center">
                        <ProfileInput title="Years">
                            {data?.experience?.years || "0"}
                        </ProfileInput>
                        <ProfileInput title="Talent Title">
                            {data?.experience?.title || "Custom text"}
                        </ProfileInput>
                        <ProfileInput title="Start Date">
                            {data?.experience?.startDate || "Custom text"}
                        </ProfileInput>
                    </div>
                    {!onlyRead && (
                        <div
                            onClick={toggleModal}
                            className="animate-bounce z-0 relative w-10 h-10 mt-4 cursor-pointer rounded-2xl dark:bg-[#293249] border-4 dark:border-[#0D111C] z-10 mx-auto -mt-18 animate-move-up-down transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <div
                                className="flex items-center justify-center w-full h-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#5D6785" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                            </div>
                        </div>
                    )}
                    <div
                        className={`${isSelected?.id ? 'animate-pulse' : 'group-hover:animate-pulse'
                            } absolute bottom-0 left-0 w-full lg:py-2 mt-[35px] bg-[#CDA28A] dark:bg-gray-800 rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 h-[20px] ${isSelected?.selected ? 'border border-red-500' : ''
                            } flex items-center justify-center`}
                    >
                        {onlyRead && (
                            <div
                                className={`${isSelected?.id ? 'opacity-0' : 'opacity-100'
                                    } group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
                            >
                                {isSelected?.id && (
                                    <p className="text-sm text-black font-semibold dark:text-white">Remove from pool</p>
                                )}
                                {!isSelected?.id && (
                                    <p className="text-sm text-black font-semibold dark:text-white">Add to the pool</p>
                                )}
                            </div>
                        )}
                    </div>
                </CustomCard>
                {isModalOpen && (
                    <Modal onClick={toggleModal} >
                        <ProfileModal detail={data?.detail} ens={ens || getAddress(address)} />
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;