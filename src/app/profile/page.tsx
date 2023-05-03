"use client"
import { useEnsName, useAccount } from 'wagmi'
import { exampleData } from "~/root/utils/example";
import getAddress from '~/root/utils/functions/common';
import ProfileCard from "~/app/components/mainComponents/MyProfile/ProfileCard";

const Profile = () => {

    const { address } = useAccount();
    const { data: ens } = useEnsName({ address });


    return (
        <>
            <div className="overflow-hidden flex flex-col items-center justify-center">
                <div className="pt-68 lg:px-8 pb-0 max-w-[900px] w-full">
                    <div className="box-border max-w-7xl m-4">
                        <div className="h-[85vh] overflow-hidden p-6 m-2 rounded-xl bg-[#FFFF] flex flex-col bg-clip-border dark:bg-[#0D111C] border border-[1px] border-[#D2D9EE] dark:border-[#2E3443]">
                            <h2 className="lg:text-3xl sm:text-xl font-extrabold text-black dark:text-white p-4">{(ens || getAddress(address) || "Custom text") as string}</h2>

                            <div className="h-full overflow-y-auto overflow-x-hidden">

                                {exampleData.map((data, index) => {
                                    return (
                                        <ProfileCard key={index} data={data} className="mr-5" />
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Profile;