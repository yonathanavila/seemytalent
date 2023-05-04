"use client"
import { useRouter } from 'next/navigation';
import { useEnsName, useAccount } from 'wagmi'
import { exampleData } from "~/root/utils/example";
import getAddress from '~/root/utils/functions/common';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ProfileCard from "~/app/components/mainComponents/MyProfile/ProfileCard";

const Profile = () => {

    const router = useRouter();
    const { address, isConnected } = useAccount();
    const { data: ens } = useEnsName({ address });

    if (!address && !isConnected) {
        return (
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow flex items-center justify-center">
                    <div className="p-8 rounded-lg">
                        <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Something went wrong</h1>
                        <h2 className="text-center text-black dark:text-white font-semibold text-2xl">In order to proceed, it is necessary to connect your wallet.</h2>
                        <div className="flex justify-center mt-4 space-x-4">
                            <button
                                onClick={() => router.push('/')}
                                className=" bg-[#F46416] hover:bg-[#F49765] text-white py-2 px-4 rounded-xl"
                            >
                                Go to Home
                            </button>
                            <ConnectButton accountStatus="address" label="Sign in" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="overflow-hidden flex flex-col items-center justify-center h-screen">
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