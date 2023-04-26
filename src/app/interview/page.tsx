"use client";
import dynamic from "next/dynamic";

const DynamicInterviewRecord = dynamic(() => import("../components/mainComponents/InterviewRecord"), { loading: () => <p>Loading...</p> });

const Interview = () => {

    return (
        < >
            <DynamicInterviewRecord />
        </>
    )
}

export default Interview