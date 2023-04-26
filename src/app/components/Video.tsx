import { useRef } from "react";
import { Audio, Video } from "@huddle01/react/components";
import { useEventListener, useHuddle01 } from "@huddle01/react";
import CustomCard from "./Card";
import Button from "./Button";



const VideoComponent: React.FC<{
    ensName: string;
    address: `0x${string}` | undefined | string;
    peers: any;
    camStream: any;
    fetchVideoStream: any;
    fetchAudioStream: any;
    className?: string;
}> = ({
    ensName,
    address,
    peers,
    camStream,
    fetchVideoStream,
    fetchAudioStream,
    className
}) => {
        const videoRef = useRef<HTMLVideoElement>(null);
        // Event Listner
        useEventListener("lobby:cam-on", () => {
            if (camStream && videoRef.current) videoRef.current.srcObject = camStream;
        });

        return (<>
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
                {ensName} Video:
                <video ref={videoRef} autoPlay muted></video>
                <div className="grid grid-cols-4">
                    {Object.values(peers)
                        .filter((peer: any) => peer.cam)
                        .map((peer: any) => (
                            <Video
                                key={peer.peerId}
                                peerId={peer.peerId}
                                track={peer.cam}
                                debug
                            />
                        ))}
                    {Object.values(peers)
                        .filter((peer: any) => peer.mic)
                        .map((peer: any) => (
                            <Audio key={peer.peerId} peerId={peer.peerId} track={peer.mic} />
                        ))}
                </div>
            </CustomCard>
        </>)
    }

export default VideoComponent;