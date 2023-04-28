"use client"

import ProfileCard from "../../components/MainComponents/MyProfile/ProfileCard";

const Profile = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="pt-68 lg:px-8 pb-0 max-w-[900px] w-full">
                    <div className="box-border max-w-7xl mx-4 my-4">
                        <ProfileCard data={{
                            id: '0x1654567890123456789012345678901234567890',
                            image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
                            ens: 'example.eth',
                            address: '0x1234567890123456789012345678901234567890',
                            experience: {

                                id: '0x1234567890123456789012345678901234567890',
                                title: 'Senior Software Engineer',
                                description: 'I am a senior software engineer with 10 years of experience.',
                                years: '10',
                                startDate: '2010-01-01'
                            },
                            isVerified: true
                        }} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Profile;