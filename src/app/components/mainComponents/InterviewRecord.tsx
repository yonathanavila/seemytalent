import { useEffect, useState } from "react";
import Image from "next/image";
import {
    useAudio,
    useLobby,
    useMeetingMachine,
    usePeers,
    useRoom,
    useVideo,
    useRecording,
} from "@huddle01/react/hooks";
import useSWR from "swr";
import { useEnsName, useAccount } from 'wagmi'
import { useDisplayName } from "@huddle01/react/app-utils";
import { useEventListener, useHuddle01 } from "@huddle01/react";

import Video from "../Video";
import Button from "../Button";
import CustomCard from "../Card";
import CustomInput from "../Input";
import getAddress from "../../../../utils/functions/common";
import useGetEnsName from "../../../../hooks/useGetEnsName";
import CopyToClipboardButton from "../CopyToClipboardButton";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";
const baseURI = process.env.NEXT_PUBLIC_BASE_API || "";

const App = () => {
    // wagmi hooks
    const { address } = useAccount();
    const { data: ens } = useEnsName({ address });
    const { data: ensAvatar } = useSWR(`https://metadata.ens.domains/mainnet/avatar/${ens}`)
    // custom hooks
    const { ensName } = useGetEnsName(address);
    // huddle01 hooks
    const [roomId, setRoomId] = useState<any>("");
    const { state, send } = useMeetingMachine();
    const { joinRoom, leaveRoom } = useRoom();
    const { initialize } = useHuddle01();
    const { joinLobby } = useLobby();
    const {
        fetchAudioStream,
        produceAudio,
        stopAudioStream,
        stopProducingAudio,
        stream: micStream,
    } = useAudio();
    const {
        fetchVideoStream,
        produceVideo,
        stopVideoStream,
        stopProducingVideo,
        stream: camStream,
    } = useVideo();
    const { peers } = usePeers();
    const {
        startRecording,
        stopRecording,
        error,
        data: recordingData,
    } = useRecording();
    // refs
    const {
        setDisplayName,
        error: displayNameError
    } = useDisplayName();
    const [displayNameText, setDisplayNameText] = useState<string>("");


    const getRoomId = () => {
        fetch(`${baseURI}/create-room`, {
            method: "GET",

        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                setRoomId(data)
            })
    }

    useEffect(() => {
        if (initialize.isCallable && projectId) {
            initialize(projectId);
        }

        getRoomId();
    }, []);


    useEventListener("room:joined", () => {
        console.log("room:joined");
    });
    useEventListener("lobby:joined", () => {
        console.log("lobby:joined");
    });

    const handleReturnLobby = () => {

    }

    return (
        <>
            <div className="flex-grow m-5">

                <button
                    className="w-auto py-3 px-4 m-2 bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75 flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={handleReturnLobby}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M10 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>

                    Return lobby
                </button>
            </div>
            <div className="flex-grow mx-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto">
                    <CustomCard className={`${ens && 'bg-gradient-to-b from-[#8498FB] to-[#49B8F1]'}`}>
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
                                    <a className="font-satoshi font-bold text-white text-[1.875rem] leading-[2.5rem]" >{(displayNameText || ensName || ens || getAddress(address) || "Custom text") as string}</a>
                                </div>
                            </div>

                            <Button
                                className="w-[200px]"
                                disabled={!setDisplayName.isCallable}
                                onClick={() => {
                                    setDisplayName(displayNameText);
                                }}
                            >
                                {`Custom name`}
                            </Button>
                        </div>
                    </CustomCard >
                    <CustomCard>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Button
                                disabled={!fetchVideoStream.isCallable}
                                onClick={fetchVideoStream}
                            >
                                Camera
                            </Button>

                            <Button
                                disabled={!fetchAudioStream.isCallable}
                                onClick={fetchAudioStream}
                            >
                                Mic
                            </Button>
                        </div>
                    </CustomCard>
                </div>
            </div>
            <div className="flex-grow mx-5 my-5 ">
                <CustomCard className="h-[500px]">
                    <Video
                        ensName={(displayNameText || ens || getAddress(address) || "Custom text") as string}
                        peers={peers}
                        camStream={camStream}
                    />
                </CustomCard>
            </div>
        </>
    );
};

export default App;