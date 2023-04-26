import { useEffect, useRef, useState } from "react";

import { useEventListener, useHuddle01 } from "@huddle01/react";
import { Audio, Video } from "@huddle01/react/components";
/* Uncomment to see the Xstate Inspector */
// import { Inspect } from '@huddle01/react/components';

import {
    useAudio,
    useLobby,
    useMeetingMachine,
    usePeers,
    useRoom,
    useVideo,
    useRecording,
} from "@huddle01/react/hooks";

import { useDisplayName } from "@huddle01/react/app-utils";

import Button from "../components/Button";
import CustomInput from "./Input";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";
const baseURI = process.env.NEXT_PUBLIC_BASE_API || "";


const App = () => {
    // refs
    const [displayNameText, setDisplayNameText] = useState("Guest");
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

    const { setDisplayName, error: displayNameError } = useDisplayName();

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
        <div className="grid grid-cols-2">
            <div>
                <h1 className="text-6xl font-bold">
                    Welcome to{" "}
                    <a className="text-blue-600" href="https://huddle01.com">
                        Huddle01 SDK!
                    </a>
                </h1>

                <h2 className="text-2xl">Room State</h2>
                <h3 className="break-words">{JSON.stringify(state.value)}</h3>

                <h2 className="text-2xl">Me Id</h2>
                <div className="break-words">
                    {JSON.stringify(state.context.peerId)}
                </div>
                <h2 className="text-2xl">DisplayName</h2>
                <div className="break-words">
                    {JSON.stringify(state.context.displayName)}
                </div>
                <h2 className="text-2xl">Recording Data</h2>
                <div className="break-words">{JSON.stringify(recordingData)}</div>

                <h2 className="text-2xl">Error</h2>
                <div className="break-words text-red-500">
                    {JSON.stringify(state.context.error)}
                </div>
                <h2 className="text-2xl">Peers</h2>
                <div className="break-words">{JSON.stringify(peers)}</div>
                <h2 className="text-2xl">Consumers</h2>
                <div className="break-words">
                    {JSON.stringify(state.context.consumers)}
                </div>

                <br />
                <br />
                <h2 className="text-3xl text-red-500 font-extrabold">Initialized</h2>
                <Button
                    disabled={!joinLobby.isCallable}
                    onClick={() => {
                        joinLobby(roomId?.data?.roomId);
                    }}
                >
                    JOIN_LOBBY
                </Button>
                <br />
                <br />
                <h2 className="text-3xl text-yellow-500 font-extrabold">Lobby</h2>
                <div className="flex gap-4 flex-wrap">
                    <CustomInput
                        type="text"
                        placeholder="Your Room Id"
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
                        {`SET_DISPLAY_NAME error: ${displayNameError}`}
                    </Button>
                    <Button
                        disabled={!fetchVideoStream.isCallable}
                        onClick={fetchVideoStream}
                    >
                        FETCH_VIDEO_STREAM
                    </Button>

                    <Button
                        disabled={!fetchAudioStream.isCallable}
                        onClick={fetchAudioStream}
                    >
                        FETCH_AUDIO_STREAM
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
                <h2 className="text-3xl text-green-600 font-extrabold">Room</h2>
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

                {/* Uncomment to see the Xstate Inspector */}
                {/* <Inspect /> */}
            </div>
            <div>
                Me Video:
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
    );
};

export default App;
