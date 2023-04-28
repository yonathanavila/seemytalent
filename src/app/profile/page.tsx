"use client"
import ProfileCard from "../components/MainComponents/Profile/ProfileCard";

const Profile = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="pt-68 px-8 pb-0 max-w-[900px] w-full">
                    <div className="box-border max-w-7xl mx-4 my-4">
                        <ProfileCard />
                    </div>
                </div >
            </div >
        </>
    )
}

export default Profile;