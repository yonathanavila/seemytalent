import { useEffect, useRef, useState } from "react";
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
import { Audio, Video } from "@huddle01/react/components";
import { useDisplayName } from "@huddle01/react/app-utils";
import { useEventListener, useHuddle01 } from "@huddle01/react";

import Button from "../Button";
import CustomInput from "../Input";
import CustomCard from "../Card";
import CopyToClipboardButton from "../CopyToClipboardButton";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";
const baseURI = process.env.NEXT_PUBLIC_BASE_API || "";

const App = () => {

    // wagmi hooks
    const { address } = useAccount();
    const {
        data: dataGetEnsName,
        isError: errorGetEnsName,
        isLoading: isLoadingGetEnsName
    } = useEnsName({ address });
    // huddle01 hooks
    const videoRef = useRef<HTMLVideoElement>(null);
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

    // Event Listner
    useEventListener("lobby:cam-on", () => {
        if (camStream && videoRef.current) videoRef.current.srcObject = camStream;
    });
    useEventListener("room:joined", () => {
        console.log("room:joined");
    });
    useEventListener("lobby:joined", () => {
        console.log("lobby:joined");
    });

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="wrapper pt-10">
                <div className="grid grid-cols-2">
                    <CustomCard title="" className="bg-gradient-to-b from-[#8498FB] to-[#49B8F1]">
                        <a className="mr-4">
                            <Image
                                className="rounded-full max-w-none w-25 h-25"
                                alt="profile-picture"
                                src={!errorGetEnsName && !isLoadingGetEnsName ? (dataGetEnsName ? `https://metadata.ens.domains/mainnet/avatar/${dataGetEnsName}` : "/img/wolf.webp") : "/img/wolf.webp"}
                                width={80}
                                height={80}
                            />
                        </a>
                        <div className="media-body">
                            <div>
                                <a className="inline-block text-base font-bold mr-2" >{!errorGetEnsName && !isLoadingGetEnsName ? (dataGetEnsName ? <h1>{dataGetEnsName}</h1> : <h1>{address}</h1>) : <h1>{"Custom name"}</h1>}</a>
                            </div>
                        </div>

                    </CustomCard >
                    <CustomCard title="">
                        <div className="grid grid-cols-3">
                            <Button
                                disabled={!fetchVideoStream.isCallable}
                                onClick={fetchVideoStream}
                            >
                                Turn on my camera
                            </Button>

                            <Button
                                disabled={!fetchAudioStream.isCallable}
                                onClick={fetchAudioStream}
                            >
                                Turn on my mic
                            </Button>
                        </div>
                    </CustomCard>
                    <CustomCard title="">
                        <div className="grid grid-cols-3">
                            <h3 className="text-2xl font-semibold m-2">Room</h3>
                            <h3 className="text-2xl font-semibold m-2">DisplayName</h3>
                        </div>
                        <div className="grid grid-cols-3">
                            <CopyToClipboardButton text={roomId && roomId?.data?.roomId} />
                            <CopyToClipboardButton text={!errorGetEnsName && !isLoadingGetEnsName ? (dataGetEnsName ? dataGetEnsName : address) : state.context.displayName} />
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
                    <div>
                        {!errorGetEnsName && !isLoadingGetEnsName ? (dataGetEnsName ? dataGetEnsName : address) : "Custom Name"} Video:
                        <video ref={videoRef} autoPlay muted></video>
                        <div className="grid grid-cols-4">
                            {Object.values(peers)
                                .filter((peer) => peer.cam)
                                .map((peer) => (
                                    <Video
                                        key={peer.peerId}
                                        peerId={peer.peerId}
                                        track={peer.cam}
                                        debug
                                    />
                                ))}
                            {Object.values(peers)
                                .filter((peer) => peer.mic)
                                .map((peer) => (
                                    <Audio key={peer.peerId} peerId={peer.peerId} track={peer.mic} />
                                ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default App;