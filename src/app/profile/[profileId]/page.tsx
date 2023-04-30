"use client"
import { exampleData } from "~/root/utils/example";
import ProfileCard from "~/app/components/mainComponents/MyProfile/ProfileCard";

const Profile = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="pt-68 lg:px-8 pb-0 max-w-[900px] w-full">
                    <div className="box-border max-w-7xl mx-4 my-4">
                        <ProfileCard data={exampleData[0]?.detail} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Profile;