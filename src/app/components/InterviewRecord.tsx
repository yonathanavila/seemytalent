import { useHuddle01 } from "@huddle01/react";
import { useEffect, useState } from "react";

import {
    useLobby,
    useAudio,
    useVideo,
    useRoom,
    useMeetingMachine,
    usePeers,
    useRecording
} from "@huddle01/react/hooks";

const baseURI = process.env.NEXT_PUBLIC_BASE_API || "";
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const InterviewRecord = () => {

    const [roomId, setRoomId] = useState<any>("");
    const { fetchAudioStream, stopAudioStream, error: micError, produceAudio, stopProducingAudio, stream: micStream } = useAudio();
    const { initialize, isInitialized } = useHuddle01();
    const { state, send } = useMeetingMachine();
    const { joinRoom, leaveRoom } = useRoom();
    const { joinLobby } = useLobby();
    const {
        startRecording,
        stopRecording,
        error,
        data: recordingData,
    } = useRecording();
    const { peers } = usePeers();
    const {
        fetchVideoStream,
        produceVideo,
        stopVideoStream,
        stopProducingVideo,
        stream: camStream,
    } = useVideo();

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
        initialize(projectId);
        getRoomId();

    }, []);


    return (
        <>
            <h1>Interview</h1>
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
            <h2 className="text-2xl">Room Id</h2>
            <div className="break-words">
                {JSON.stringify(roomId)}
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
            <h2 className="text-3xl text-yellow-500 font-extrabold">Lobby</h2>
            <div className="flex gap-4 flex-wrap">

            </div>
            <div className="flex items-center justify-center py-8">
                <div className="grid gap-4 grid-cols-3 grid-rows-3">
                    <div>{isInitialized && roomId ? 'Hello World' : 'Please initialize'}</div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={!joinLobby.isCallable}
                        onClick={() => joinLobby(roomId?.data?.roomId)}
                    >
                        Join Lobby
                    </button>
                    {/* Webcam */}
                    <button disabled={!fetchVideoStream.isCallable} onClick={fetchVideoStream} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        FETCH_VIDEO_STREAM
                    </button>
                    {/* Mic */}
                    <button disabled={!fetchAudioStream.isCallable} onClick={fetchAudioStream} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        FETCH_AUDIO_STREAM
                    </button>

                    <button disabled={!joinRoom.isCallable} onClick={joinRoom} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        JOIN_ROOM
                    </button>

                    <button disabled={!state.matches("Initialized.JoinedLobby")} onClick={() => send("LEAVE_LOBBY")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        LEAVE_LOBBY
                    </button>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={!stopVideoStream.isCallable}
                        onClick={stopVideoStream}
                    >
                        STOP_VIDEO_STREAM
                    </button>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={!stopAudioStream.isCallable}
                        onClick={stopAudioStream}
                    >
                        STOP_AUDIO_STREAM
                    </button>

                </div>
            </div >
        </>
    );
}

export default InterviewRecord;