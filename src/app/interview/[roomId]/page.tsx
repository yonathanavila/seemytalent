"use client";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';
import InterviewRecord from "~/app/components/mainComponents/InterviewRecord";

function Interview() {
    const router = usePathname();
    const roomId = router?.split("/")[2].toString();

    useEffect(() => {
        console.log(router)
    }, [])
    return (
        <div className="flex flex-col h-screen">
            <InterviewRecord roomId={roomId} />
        </div>
    )
}

export default Interview