"use client"
import ProfileCard from "../components/MainComponents/Profile/ProfileCard";

const Profile = () => {
    return (
        <>
            <div className=" overflow-hidden flex flex-col items-center justify-center">
                <div className="pt-68 lg:px-8 pb-0 max-w-[900px] w-full">
                    <div className="box-border max-w-7xl m-4">
                        <div className="h-[85vh] overflow-hidden p-6 m-2 rounded-xl bg-white flex flex-col bg-clip-border dark:bg-[#0D111C] border border-[1px] border-[#2E3443] ">
                            <h2 className="lg:text-3xl sm:text-xl font-extrabold dark:text-white p-4">yonathancruz.eth</h2>
                            <div className="h-full overflow-y-auto overflow-x-hidden">

                                <ProfileCard />

                                <ProfileCard />

                                <ProfileCard />

                                <ProfileCard />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Profile;