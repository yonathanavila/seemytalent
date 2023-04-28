import useSWR from "swr";
import React, { useState } from 'react';
import Image from "next/image";
import { useEnsName, useAccount } from 'wagmi'

import CustomCard from '../../Card';
import OptionsProfile from './ProfileOptions';
import getAddress from "../../../../../utils/functions/common";
import ProfileSubtitles from "./ProfileSubtitles";
import CopyToClipboardButton from "../../CopyToClipboardButton";
import ProfileInput from "./ProfileInput";
import ProfileTextArea from "./ProfileTextArea";
import Modal from "../Modal";
import ProfileChackbox from "./ProfileCheckbox";

const ProfileCard: React.FC<{
    className?: string;
    disabled?: boolean;
}> = ({ className, disabled }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        console.log("toggleModal");
        setIsModalOpen(!isModalOpen);
    };

    // wagmi hooks
    const { address } = useAccount();
    const { data: ens } = useEnsName({ address });
    const { data: ensAvatar } = useSWR(`https://metadata.ens.domains/mainnet/avatar/${ens}`)

    return (
        <>

            <CustomCard title={"yonathancruz.eth"} className="dark:bg-[#0D111C] border border-[1px] border-[#2E3443] ">
                <OptionsProfile />
                <CustomCard className="dark:bg-[#131A2A] ">

                    <div className="flex justify-between">
                        <div>
                            <Image
                                className="rounded-full max-w-none w-25 h-25 ml-5"
                                alt="profile-picture"
                                src={((!ensAvatar?.message ? `https://metadata.ens.domains/mainnet/avatar/${ens}` : "/img/wolf.webp") || "/img/wolf.webp")}
                                width={80}
                                height={80}
                            />
                            <div className="flex flex-col items-start justify-center gap-1 w-full overflow-hidden">
                                <a className="font-satoshi font-bold text-white text-[1.875rem] leading-[2.5rem]" >{(ens || getAddress(address) || "Custom text") as string}</a>
                            </div>
                        </div>
                    </div>

                </CustomCard>
                <CustomCard className="dark:bg-[#131A2A] ">

                    <ProfileSubtitles>
                        Address
                    </ProfileSubtitles>
                    <CopyToClipboardButton>
                        0x00000000000000000
                    </CopyToClipboardButton>
                    <br />
                    <ProfileSubtitles>
                        Experience
                    </ProfileSubtitles>
                    <div className="flex flex-wrap justify-center">
                        <ProfileInput title="Years">
                            4
                        </ProfileInput>
                        <ProfileInput title="Talent Title">
                            Full Stack Developer
                        </ProfileInput>
                        <ProfileInput title="Start Date">
                            November 10, 2019
                        </ProfileInput>
                    </div>
                    <div
                        onClick={toggleModal}
                        className="animate-bounce relative w-10 h-10 mt-4 cursor-pointer rounded-2xl dark:bg-[#293249] border-4 dark:border-[#0D111C] z-10 mx-auto -mt-18 animate-move-up-down transition duration-500 ease-in-out transform hover:scale-105"
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

                </CustomCard>
            </CustomCard>

            {isModalOpen && (

                <Modal onClick={toggleModal} >
                    <div className="h-100 overflow-auto">
                        <ProfileSubtitles>
                            Personal Information
                        </ProfileSubtitles>
                        <div className="flex flex-wrap justify-center">
                            <ProfileInput title="Full Name">
                                Yonathan Cruz
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
                                Bannano
                            </ProfileInput>
                            <ProfileInput
                                title="Proyect Title"
                                svg={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className="ml-2 block mt-1 w-3 h-3 text-gray-500" ><path fillRule="evenodd" clipRule="evenodd" d="M0 8.15217C0 5.52282 2.11999 3.3913 4.73514 3.3913H10.7676C11.6632 3.3913 12.3892 4.12127 12.3892 5.02174C12.3892 5.9222 11.6632 6.65217 10.7676 6.65217H4.73514C3.91119 6.65217 3.24324 7.32375 3.24324 8.15217V19.2391C3.24324 20.0676 3.91119 20.7391 4.73514 20.7391H15.7622C16.5861 20.7391 17.2541 20.0676 17.2541 19.2391V13.5652C17.2541 12.6648 17.9801 11.9348 18.8757 11.9348C19.7713 11.9348 20.4973 12.6648 20.4973 13.5652V19.2391C20.4973 21.8685 18.3773 24 15.7622 24H4.73514C2.11999 24 0 21.8685 0 19.2391V8.15217Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2324 1.63043C13.2324 0.729971 13.9585 0 14.8541 0H22.3784C23.274 0 24 0.729971 24 1.63043V8.93478C24 9.83525 23.274 10.5652 22.3784 10.5652C21.4828 10.5652 20.7568 9.83525 20.7568 8.93478V5.56665L11.8494 14.5225C11.2161 15.1592 10.1893 15.1592 9.55604 14.5225C8.92276 13.8857 8.92276 12.8534 9.55604 12.2167L18.4634 3.26087H14.8541C13.9585 3.26087 13.2324 2.5309 13.2324 1.63043Z" fill="currentColor"></path></svg>}
                            >
                                Bannano no solutions
                            </ProfileInput>
                        </div>
                    </div>
                </Modal>

            )}
        </>
    );
};

export default ProfileCard;