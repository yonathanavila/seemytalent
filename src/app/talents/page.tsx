"use client";
import ProfileCard from "../components/MainComponents/MyProfile/ProfileCard";

const Talents = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-2">
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
            </div>
        </>
    )
}

export default Talents;