import { useRef } from "react";
import { Audio, Video } from "@huddle01/react/components";
import { useEventListener, useHuddle01 } from "@huddle01/react";

const VideoComponent: React.FC<{
    ensName: string;
    peers: any;
    camStream: any;
    className?: string;
}> = ({
    ensName,
    peers,
    camStream,
    className
}) => {
        const videoRef = useRef<HTMLVideoElement>(null);
        // Event Listner
        useEventListener("lobby:cam-on", () => {
            if (camStream && videoRef.current) videoRef.current.srcObject = camStream;
        });

        return (<>
            <div>

                {ensName} Video:
                <video ref={videoRef} autoPlay muted></video>
                <>
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
                </>
            </div >
        </>)
    }

export default VideoComponent;