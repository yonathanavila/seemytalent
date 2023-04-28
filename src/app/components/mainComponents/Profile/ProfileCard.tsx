import useSWR from "swr";
import React from 'react';
import Image from "next/image";
import { useEnsName, useAccount } from 'wagmi'

import CustomCard from '../../Card';
import OptionsProfile from './ProfileOptions';
import getAddress from "../../../../../utils/functions/common";
import ProfileSubtitles from "./ProfileSubtitles";
import CopyToClipboardButton from "../../CopyToClipboardButton";
import ProfileInput from "./ProfileInput";

const ProfileCard: React.FC<{
    className?: string;
    disabled?: boolean;
}> = ({ className, disabled }) => {
    // wagmi hooks
    const { address } = useAccount();
    const { data: ens } = useEnsName({ address });
    const { data: ensAvatar } = useSWR(`https://metadata.ens.domains/mainnet/avatar/${ens}`)

    return (
        <CustomCard title={"yonathancruz.eth"} className="dark:bg-[#0D111C] border border-[1px] border-[#2E3443]">
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
                <div className="relative w-10 h-10 mt-2 cursor-pointer rounded-2xl dark:bg-[#293249] border-4 dark:border-[#0D111C] z-10 mx-auto -mt-18 animate-move-up-down transition duration-500 ease-in-out transform hover:scale-105">
                    <div className="flex items-center justify-center w-full h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#5D6785" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>

                    </div>
                </div>


            </CustomCard>
        </CustomCard>
    );
};

export default ProfileCard;