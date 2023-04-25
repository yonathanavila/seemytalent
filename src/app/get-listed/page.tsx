"use client";
import useSWR from "swr";
import Image from "next/image";
import { useAccount } from "wagmi";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { timeAgo } from "../../../utils/constants";

const baseURI = process.env.NEXT_PUBLIC_BASE_URI || "/api/v1"

const Comment = ({ item }: any) => {
    return (
        <>
            <div className="media flex pb-4">
                <a className="mr-4">
                    <Image className="rounded-full max-w-none w-12 h-12" alt="profile-picture" src={'/img/wolf.webp'} width={50} height={50} />
                </a>
                <div className="media-body">
                    <div>
                        <a className="inline-block text-base font-bold mr-2" >{item?.C2}</a>
                        <span className="text-slate-500 dark:text-slate-300">{timeAgo(item?.created_at)}</span>
                    </div>
                    <p>{item?.C3}</p>
                    <div className="mt-2 flex items-center">
                        <a className="inline-flex items-center py-2 mr-3">
                            <span className="mr-2">
                                <svg className="fill-rose-600 dark:fill-rose-400" style={{ width: 22, height: 22 }}
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                    </path>
                                </svg>
                            </span>
                            <span className="text-base font-bold">{item?.C4 > 0 ? item?.C4 : 1}</span>
                        </a>
                        <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                            Repply
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const Page = () => {
    const [result, setResult] = useState<any>(undefined);
    const [error, setError] = useState<any>();
    const { address, isConnected } = useAccount();
    const [pageStart, setPageStart] = useState(5);

    const [formInfo, setFormInfo] = useState<any>({
        C2: "",
        C3: ""
    });

    const { data: apiCall, error: errorSWR, isLoading } = useSWR(`${baseURI}/get-list`);

    const handlerSave = async () => {
        if (!isConnected) {
            alert("Please connect your wallet");
            return;
        }

        if (!formInfo.C2 || !formInfo.C3) {
            alert("Please fill all fields");
            return;
        }

        if (isConnected && address) {
            console.log("address", address);

            const response = await fetch(`${baseURI}/save-list`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ C1: address, ...formInfo }),
            });
            const data = await response.json();
            console.log("data", data);
            if (data.error) {

                setError(data.error);
                toast.error("Error saving");

            }

            if (data.length > 0) {

                toast.success("Saved successfully");
                setFormInfo({ C2: "", C3: "" });

            } else {

                setError(data.error);
                toast.error("Error saving");

            }
        }
    }

    const handleCallerInfoChange = (event: any) => {
        const { name, value } = event.target;
        setFormInfo({ ...formInfo, [name]: value });
    };

    useEffect(() => {
        if (apiCall?.length > 0) {
            setResult(apiCall?.reverse().slice(0, 5));
        }

    }, [apiCall]);

    const handlerShowMore = async () => {
        const currentLength = result?.length;
        const endPageToShow = pageStart > currentLength ? currentLength : pageStart + 5;
        if (currentLength < 5) {
            setResult(apiCall);
        } else {
            console.log(pageStart, endPageToShow);
            setResult(apiCall.slice(pageStart, endPageToShow));
        }
        setPageStart(endPageToShow);
    }

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', minHeight: '100vh' }}>
                <div className="wrapper pt-10">
                    <div className="flex items-center justify-center py-8">
                        <button id="theme-toggle" type="button"
                            className="text-gray-500 dark:text-gray-400 transition bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2.5">
                            <svg id="theme-toggle-dark-icon" className="hidden fill-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon" className="hidden fill-yellow-400 w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="box-border max-w-7xl mx-4 ">
                        <article className="mb-4 p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
                            <h2 className="text-3xl font-extrabold dark:text-white">
                                Get listed
                            </h2>
                            <div className="py-4">
                                <a className="inline-flex items-center" href="#">
                                    <span className="mr-2">
                                        <svg className="fill-rose-600 dark:fill-rose-400" style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                            <path
                                                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="text-lg font-bold">{apiCall?.length > 0 ? apiCall.length : 1}</span>
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                                    type="text" placeholder="Write your name" name="C2" onChange={handleCallerInfoChange} />

                                <span className="flex absolute right-3 top-2/4 -mt-3 items-center ">
                                    <svg className="mr-2" style={{ width: 26, height: 26 }} viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div className="relative mt-4">
                                <input
                                    className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                                    type="text" placeholder="Write your comment" name="C3" onChange={handleCallerInfoChange} />

                                <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                                    <svg className="mr-2" style={{ width: 26, height: 26 }} viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
                                        </path>
                                    </svg>
                                    <svg className="fill-blue-500 dark:fill-slate-50 hover:cursor-pointer" style={{ width: 24, height: 24 }} viewBox="0 0 24 24" onClick={handlerSave}>
                                        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="w-full mt-4">
                                <button
                                    className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
                                    onClick={handlerSave}
                                >
                                    Save
                                </button>
                            </div>
                            {apiCall?.length > 0 &&
                                <div className="pt-6">

                                    {result?.length > 0 && result?.map((item: any, index: any) => <Comment key={index} item={item} />)}

                                    <div className="w-full">
                                        <button
                                            onClick={handlerShowMore}
                                            className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
                                        >
                                            Show more comments
                                        </button>
                                    </div>
                                </div>
                            }

                        </article>
                    </div>
                </div>
                <footer className="w-full flex justify-center flex-col py-4 text-center mt-14">
                    <p className="mb-1">
                        Built by&nbsp;
                        <a
                            className="font-medium underline"
                            href="https://www.linkedin.com/in/yonathan-c-326b141b2/"
                        >
                            Yonathan Cruz
                        </a>
                    </p>
                    <p className="dark:text-white mb-3">
                        Contact me on the different platforms and social networks
                    </p>
                    <div className="flex items-center justify-center">
                        <a className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition dark:hover:bg-slate-800 dark:text-white"
                            href="https://github.com/yonathanavila/seemytalent" target="__blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z">
                                </path>
                            </svg>
                        </a>
                        <a className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition dark:hover:bg-slate-800 dark:text-white"
                            href="https://twitter.com/YonthanCruz" target="__blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Page;