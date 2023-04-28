import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEnsName, useAccount } from 'wagmi'
import React, { useRef, useState, useEffect, use } from 'react';
import { addTalent, selectTalent } from "@/utils/slice/talents";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";


import Modal from "../Modal";
import Button from "../../Button";
import CustomCard from '../../Card';
import ProfileInput from "./ProfileInput";
import OptionsProfile from './ProfileOptions';
import ProfileTextArea from "./ProfileTextArea";
import ProfileChackbox from "./ProfileCheckbox";
import ProfileSubtitles from "./ProfileSubtitles";
import CopyToClipboardButton from "../../CopyToClipboardButton";

export interface IExperience { id: string; title: string; description: string; years: string; startDate: string; }
export interface IProfileBasic { id: string; image: string; ens: string; address: string; experience: IExperience; isVerified: boolean; }

const ProfileCard: React.FC<{
    data: IProfileBasic;
    onlyRead?: boolean;
    className?: string;
    disabled?: boolean;
}> = ({ data, onlyRead, className, disabled }) => {

    const router = useRouter();
    const modalRef: any = useRef();
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
            const found = talent.find((element: any) => element.id == data?.id);
            if (found) {
                setIsSelected(found);
            } else {
                setIsSelected(found);
            }
        }

    }
        , [talent]);

    const handleAddTalent = async (id_: any) => {
        const found = await talent.find((element: any) => element == id_);

        if (found == id_) {
            // element found
        } else {
            // element added
            dispatch(addTalent({ id: data?.id, selected: true }));
        }
    }

    return (
        <div className={`${className} relative group`} onClick={() => handleAddTalent(data?.id)}>
            <div className={`${onlyRead && ((isSelected?.selected ? 'transition-opacity duration-300 ease-in-out opacity-75 hover:cursor-pointer' : 'transition-opacity duration-300 ease-in-out hover:opacity-75 hover:cursor-pointer'))}`}>
                {!onlyRead && (<OptionsProfile Arrayfunction={[showMessageModal]} />)}
                {isMessageOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 " ref={modalRef}>
                        <div className="w-[322px] h-[310px] dark:bg-[#0D111C] rounded-lg border border-[1px] border-[#2E3443] relative ">
                            <div className="flex justify-between m-4">
                                <p className="dark:text-[#79829E] font-semibold">Room</p>
                                <div onClick={showMessageModal} className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                            </div>
                            <Button onClick={() => router.push('/interview')} className="flex items-center justify-center absolute bottom-0" >

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

                <CustomCard className={`${ens ? 'bg-gradient-to-b from-[#9BB5FE] to-[#49B8F1] ' : 'dark:bg-[#131A2A] text-white'} `}>

                    <div className="flex justify-between">
                        <div>
                            <Image
                                className="rounded-full  w-25 h-25 ml-5"
                                alt="profile-picture"
                                src={((data?.image ? data?.image : "/img/wolf.webp") || "/img/wolf.webp")}
                                width={80}
                                height={80}
                            />
                            <div className="flex flex-col items-start justify-center w-full my-2">
                                <a className={`mt-2 font-satoshi font-bold ${ens ? 'text-black' : 'text-white'} text-2xl leading-10`}>{(ens || address || "Custom text") as string}</a>
                            </div>
                        </div>
                    </div>

                </CustomCard>
                <CustomCard className="dark:bg-[#131A2A]">

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
                        className={`${isSelected ? 'animate-pulse' : 'group-hover:animate-pulse'
                            } absolute bottom-0 left-0 w-full lg:py-2 sm:mt-4 dark:bg-gray-800 dark:text-white text-center rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 h-[20px]`}
                    />

                    {onlyRead && (
                        <div className={
                            (isSelected?.selected ? ' animate-pulse absolute bottom-0 left-0 w-full lg:py-2 sm:mt-4 dark:bg-gray-800 dark:text-white text-center rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 h-[20px]' :
                                'group-hover:animate-pulse absolute bottom-0 left-0 w-full lg:py-2 sm:mt-4 dark:bg-gray-800 dark:text-white text-center rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 h-[20px')} />
                    )}

                </CustomCard>
                {isModalOpen && (

                    <Modal onClick={toggleModal} >
                        <div className="h-100 overflow-auto">
                            <ProfileSubtitles>
                                Personal Information
                            </ProfileSubtitles>
                            <div className="flex flex-wrap justify-center">
                                <ProfileInput title="Full Name">
                                    {data?.ens || data || "Custom text"}
                                </ProfileInput>
                                <CopyToClipboardButton title="Email">
                                    yonathancruz2015@gmail.com
                                </CopyToClipboardButton>
                                <CopyToClipboardButton title="Phone Number">
                                    +503 6889 1234
                                </CopyToClipboardButton>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <ProfileInput title="Address">
                                    Calle toluca
                                </ProfileInput>
                                <ProfileInput title="Date of Birth">
                                    April 21, 1997
                                </ProfileInput>
                                <ProfileInput title="Nationality">
                                    Honduran
                                </ProfileInput>
                            </div>
                            <ProfileSubtitles>
                                Education
                            </ProfileSubtitles>
                            <div className="flex flex-wrap justify-center">
                                <ProfileInput title="Degree/Qualification">
                                    Software Engineer
                                </ProfileInput>
                                <ProfileInput title="University/Institution">
                                    Universidad Catolica de Honduras
                                </ProfileInput>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <ProfileInput title="GPA/Percentage">
                                    Honduran
                                </ProfileInput>
                                <ProfileInput title="Aditional Education">
                                    Honduran
                                </ProfileInput>
                            </div>
                            <ProfileSubtitles>
                                Work Experience
                            </ProfileSubtitles>
                            <div className="flex flex-wrap justify-center">
                                <ProfileInput title="Job Title">
                                    Full Stack Developer
                                </ProfileInput>
                                <ProfileInput title="Company">
                                    Freelance
                                </ProfileInput>
                                <ProfileInput title="Employment Duration">
                                    December 21, 2022 - Present
                                </ProfileInput>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <ProfileTextArea title="Job Description" value={" Full Stack Developer"} />
                                <ProfileTextArea title="Achievements/Responsibilities" value={" Full Stack Developer"} />
                            </div>
                            <ProfileSubtitles>
                                Skills
                            </ProfileSubtitles>
                            <div className="flex flex-wrap justify-center">
                                <ProfileChackbox />
                            </div>
                            <ProfileSubtitles>
                                Projects
                            </ProfileSubtitles>
                            <div className="flex flex-wrap justify-center">
                                <ProfileInput
                                    title="Proyect Title"
                                    svg={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className="ml-2 block mt-1 w-3 h-3 text-gray-500" ><path fillRule="evenodd" clipRule="evenodd" d="M0 8.15217C0 5.52282 2.11999 3.3913 4.73514 3.3913H10.7676C11.6632 3.3913 12.3892 4.12127 12.3892 5.02174C12.3892 5.9222 11.6632 6.65217 10.7676 6.65217H4.73514C3.91119 6.65217 3.24324 7.32375 3.24324 8.15217V19.2391C3.24324 20.0676 3.91119 20.7391 4.73514 20.7391H15.7622C16.5861 20.7391 17.2541 20.0676 17.2541 19.2391V13.5652C17.2541 12.6648 17.9801 11.9348 18.8757 11.9348C19.7713 11.9348 20.4973 12.6648 20.4973 13.5652V19.2391C20.4973 21.8685 18.3773 24 15.7622 24H4.73514C2.11999 24 0 21.8685 0 19.2391V8.15217Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2324 1.63043C13.2324 0.729971 13.9585 0 14.8541 0H22.3784C23.274 0 24 0.729971 24 1.63043V8.93478C24 9.83525 23.274 10.5652 22.3784 10.5652C21.4828 10.5652 20.7568 9.83525 20.7568 8.93478V5.56665L11.8494 14.5225C11.2161 15.1592 10.1893 15.1592 9.55604 14.5225C8.92276 13.8857 8.92276 12.8534 9.55604 12.2167L18.4634 3.26087H14.8541C13.9585 3.26087 13.2324 2.5309 13.2324 1.63043Z" fill="currentColor"></path></svg>}
                                >
                                    Onchain Events
                                </ProfileInput>
                                <ProfileInput
                                    title="Proyect Title"
                                    svg={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className="ml-2 block mt-1 w-3 h-3 text-gray-500" ><path fillRule="evenodd" clipRule="evenodd" d="M0 8.15217C0 5.52282 2.11999 3.3913 4.73514 3.3913H10.7676C11.6632 3.3913 12.3892 4.12127 12.3892 5.02174C12.3892 5.9222 11.6632 6.65217 10.7676 6.65217H4.73514C3.91119 6.65217 3.24324 7.32375 3.24324 8.15217V19.2391C3.24324 20.0676 3.91119 20.7391 4.73514 20.7391H15.7622C16.5861 20.7391 17.2541 20.0676 17.2541 19.2391V13.5652C17.2541 12.6648 17.9801 11.9348 18.8757 11.9348C19.7713 11.9348 20.4973 12.6648 20.4973 13.5652V19.2391C20.4973 21.8685 18.3773 24 15.7622 24H4.73514C2.11999 24 0 21.8685 0 19.2391V8.15217Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2324 1.63043C13.2324 0.729971 13.9585 0 14.8541 0H22.3784C23.274 0 24 0.729971 24 1.63043V8.93478C24 9.83525 23.274 10.5652 22.3784 10.5652C21.4828 10.5652 20.7568 9.83525 20.7568 8.93478V5.56665L11.8494 14.5225C11.2161 15.1592 10.1893 15.1592 9.55604 14.5225C8.92276 13.8857 8.92276 12.8534 9.55604 12.2167L18.4634 3.26087H14.8541C13.9585 3.26087 13.2324 2.5309 13.2324 1.63043Z" fill="currentColor"></path></svg>}
                                >
                                    SIGMEPE
                                </ProfileInput>
                            </div>
                        </div>
                    </Modal>

                )}
            </div>
        </div>
    );
};

export default ProfileCard;