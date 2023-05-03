"use client";
import useSWR from "swr";
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
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useEnsName, useAccount } from 'wagmi'
import { Audio, Video } from "@huddle01/react/components";
import { useDisplayName } from "@huddle01/react/app-utils";
import { useEventListener, useHuddle01 } from "@huddle01/react";
import Button from "~/app/components/Button";
import CustomCard from "~/app/components/Card";
import getAddress from "~/root/utils/functions/common";
import useGetEnsName from "~/root/hooks/useGetEnsName";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";
const baseURI = process.env.NEXT_PUBLIC_BASE_API || "";

function InterviewRecord({ roomId }: any) {
    // wagmi hooks
    const { address } = useAccount();
    const ens: any = undefined
    const ensName: any = undefined
    const ensAvatar: any = undefined
    /*     const { data: ens } = useEnsName({ address });
        const { data: ensAvatar } = useSWR(`https://metadata.ens.domains/mainnet/avatar/${ens}`)
        // custom hooks
        const { ensName } = useGetEnsName(address); */

    const router = useRouter();
    // huddle01 hooks
    const { state, send } = useMeetingMachine();
    const { joinRoom, leaveRoom } = useRoom();
    const { initialize } = useHuddle01();
    const { joinLobby } = useLobby();
    const videoRef = useRef<HTMLVideoElement>(null);

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


    const InitializeMeeting = () => {

        if (joinRoom.isCallable && fetchAudioStream.isCallable && fetchAudioStream.isCallable) {

            fetchVideoStream();
            fetchAudioStream();

        }
    }

    const fetchParticipants = async () => {
        produceVideo(micStream);
        produceAudio(camStream);
    }

    useEffect(() => {
        if (initialize?.isCallable && projectId) {
            initialize(projectId);
        }

        if (joinLobby.isCallable && roomId) {
            joinLobby(roomId);
            InitializeMeeting()
        }

    }, [initialize, joinLobby.isCallable]);


    useEventListener("room:joined", () => {
        console.log("room:joined");
        if (produceAudio.isCallable && produceVideo.isCallable) {
            fetchParticipants()
        }
    });
    useEventListener("lobby:joined", () => {
        console.log("lobby:joined");
        InitializeMeeting();
    });

    // Event Listner
    useEventListener("lobby:cam-on", () => {
        console.log("cam-on");
        if (camStream && videoRef.current) videoRef.current.srcObject = camStream;
        if (joinRoom.isCallable) {

            joinRoom();
        }
    });

    return (
        <>
            <div className="flex-grow m-5">
                <button
                    className="w-auto py-3 px-4 m-2 bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75 flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-black dark:text-white"
                    onClick={() => router.push('/profile')}
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
                            <CustomCard className={`${ens && 'bg-gradient-to-b from-[#9BB5FE] to-[#49B8F1]'} `}>
                                <div className="group flex justify-between">
                                    <div className="flex items-center">
                                        <Image
                                            className="shrink-0 h-12 w-12 m-2 rounded-full"
                                            alt="profile-picture"
                                            src={((ensAvatar?.message ? `https://metadata.ens.domains/mainnet/avatar/${ens}` : "/img/wolf.webp") || "/img/wolf.webp")}
                                            width={80}
                                            height={80}
                                        />
                                        <div className="mx-4">
                                            <p className="text-sm font-medium dark:text-slate-300 dark:group-hover:text-white">{(ens || getAddress(address) || "Custom text") as string}</p>
                                        </div>
                                    </div>
                                    <button className="text-sm font-medium text-gray-500 dark:text-slate-300">Custom name</button>
                                </div>
                            </CustomCard>
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
            <div className="flex-grow mx-5 my-2 ">
                <CustomCard>
                    <h2 className="text-2xl text-black">Room State</h2>
                    <h3 className="break-words text-black">{JSON.stringify(state.value)}</h3>
                    {ensName} Video:
                    <div className="flex">
                        <video ref={videoRef} autoPlay muted className="max-w-lg mx-5"></video>
                        <div>
                            {Object.values(peers)
                                .filter((peer: any) => peer.cam)
                                .map((peer: any) => (
                                    <Video
                                        key={peer.peerId}
                                        peerId={peer.peerId}
                                        track={peer.cam}
                                        className="max-w-lg mx-5"
                                        debug
                                    />
                                ))}
                            {Object.values(peers)
                                .filter((peer: any) => peer.mic)
                                .map((peer: any) => (
                                    <Audio key={peer.peerId} peerId={peer.peerId} track={peer.mic} />
                                ))}
                        </div>
                    </div>
                </CustomCard>
            </div>
        </>
    );
};

export default InterviewRecord;