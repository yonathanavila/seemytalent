"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useEnsName, useAccount } from 'wagmi';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import InterviewRecord from "~/app/components/mainComponents/InterviewRecord";

function Interview() {

    const routerNavi = useRouter();
    const router = usePathname();
    const roomId = router?.split("/")[2].toString();

    useEffect(() => {
        console.log(router)
    }, [])

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
                                onClick={() => routerNavi.push('/')}
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
        <div className="flex flex-col h-screen">
            <InterviewRecord roomId={roomId} />
        </div>
    )
}

export default Interview