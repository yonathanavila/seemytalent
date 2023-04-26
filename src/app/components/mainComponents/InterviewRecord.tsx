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

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-20">
            <div className="wrapper pt-10">
                <div className="box-border max-w-7xl mx-4 max-w-7xl mx-4 sm:columns-1 md:columns-2 lg:columns-2 xl:columns-2">
                    <CustomCard className={`${ens && 'bg-gradient-to-b from-[#8498FB] to-[#49B8F1]'}`}>
                        <a className="mr-4">
                            <Image
                                className="rounded-full max-w-none w-25 h-25"
                                alt="profile-picture"
                                src={(ens ? `https://metadata.ens.domains/mainnet/avatar/${ens}` : "/img/wolf.webp")}
                                width={80}
                                height={80}
                            />
                        </a>
                        <div className="media-body">
                            <div>
                                <a className="inline-block text-base font-bold mr-2 mt-2" >{(displayNameText || ensName || ens || getAddress(address) || "Custom text") as string}</a>
                            </div>
                        </div>

                    </CustomCard >
                    <CustomCard>

                        <h3 className="text-2xl font-semibold m-2">Room</h3>
                        <div className="flex flex-row flex-wrap gap-0.5 mt-0.5">
                            <CopyToClipboardButton title={"Room Id"} text={roomId && roomId?.data?.roomId} />
                            <CopyToClipboardButton title={"Display name"} text={(displayNameText || ens || getAddress(address) || "Custom text") as string} />
                        </div>
                        <h3 className="text-2xl font-semibold mt-4">Peers</h3>
                        <div className="break-words">{JSON.stringify(peers)}</div>
                        <br />
                        <br />
                        <Button
                            disabled={!joinLobby.isCallable}
                            onClick={() => {
                                joinLobby(roomId?.data?.roomId);
                            }}
                        >
                            Join Lobby
                        </Button>
                        <br />
                        <br />
                        <h3 className="text-2xl m-2 text-white-500 font-extrabold">Lobby</h3>
                        <div className="flex gap-4 flex-wrap">
                            <CustomInput
                                type="text"
                                placeholder="Enter your name"
                                name="room-id"
                                value={displayNameText}
                                onChange={(e) => setDisplayNameText(e.target.value)}
                            />
                            <Button
                                disabled={!setDisplayName.isCallable}
                                onClick={() => {
                                    setDisplayName(displayNameText);
                                }}
                            >
                                {`Custom name`}
                            </Button>

                            <Button disabled={!joinRoom.isCallable} onClick={joinRoom}>
                                JOIN_ROOM
                            </Button>

                            <Button
                                disabled={!state.matches("Initialized.JoinedLobby")}
                                onClick={() => send("LEAVE_LOBBY")}
                            >
                                LEAVE_LOBBY
                            </Button>

                            <Button
                                disabled={!stopVideoStream.isCallable}
                                onClick={stopVideoStream}
                            >
                                STOP_VIDEO_STREAM
                            </Button>
                            <Button
                                disabled={!stopAudioStream.isCallable}
                                onClick={stopAudioStream}
                            >
                                STOP_AUDIO_STREAM
                            </Button>
                        </div>
                        <br />
                        <h3 className="text-3xl text-green-600 font-extrabold">Room</h3>
                        <div className="flex gap-4 flex-wrap">
                            <Button
                                disabled={!produceAudio.isCallable}
                                onClick={() => produceAudio(micStream)}
                            >
                                PRODUCE_MIC
                            </Button>

                            <Button
                                disabled={!produceVideo.isCallable}
                                onClick={() => produceVideo(camStream)}
                            >
                                PRODUCE_CAM
                            </Button>

                            <Button
                                disabled={!stopProducingAudio.isCallable}
                                onClick={() => stopProducingAudio()}
                            >
                                STOP_PRODUCING_MIC
                            </Button>

                            <Button
                                disabled={!stopProducingVideo.isCallable}
                                onClick={() => stopProducingVideo()}
                            >
                                STOP_PRODUCING_CAM
                            </Button>

                            <Button
                                disabled={!startRecording.isCallable}
                                onClick={() =>
                                    startRecording(`${window.location.href}rec/${roomId}`)
                                }
                            >
                                {`START_RECORDING error: ${error}`}
                            </Button>
                            <Button disabled={!stopRecording.isCallable} onClick={stopRecording}>
                                STOP_RECORDING
                            </Button>

                            <Button disabled={!leaveRoom.isCallable} onClick={leaveRoom}>
                                LEAVE_ROOM
                            </Button>
                        </div>
                    </CustomCard>

                    <Video
                        ensName={(displayNameText || ens || getAddress(address) || "Custom text") as string}
                        address={getAddress(address)}
                        peers={peers}
                        camStream={camStream}
                        fetchVideoStream={fetchVideoStream}
                        fetchAudioStream={fetchAudioStream}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;