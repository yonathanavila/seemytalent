"use client";
import ProfileCard from "../components/MainComponents/MyProfile/ProfileCard";

const Talents = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-2 my-2">
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <ProfileCard className="md:max-w-[300px] sm:max-w-full" onlyRead={true} />
                <div className="fixed bottom-0 right-0">
                    <span className="absolute bottom-0 right-0 px-2 py-1 m-4 text-white rounded-full text-2xl">
                        10
                    </span>
                </div>


            </div>
        </>
    )
}

export default Talents;