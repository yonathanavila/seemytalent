"use client";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from "react";

const Navbar = () => {

    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`z-10 fixed top-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-gray-900 border-b-[1px] border-[#2E3443]' : 'bg-transparent'
            }`}>
            <nav className="p-5 w-full h-18 z-2 px-4 py-4 flex justify-between lg:items-center z-100">
                <div className="font-semibold flex items-center" >
                    <Image src={'/img/SeeMyTalent.png'} alt="SeeMyTalent" width={35} height={35} className="m-2 hover:cursor-pointer" onClick={() => router.push('/')} />
                    <a className="hidden sm:block text-md text-white hover:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" target="_blank" onClick={() => router.push('/')}>Home</a>{/* 
                    <a className="hidden sm:block text-md text-gray-400 font-bold hover:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" onClick={() => router.push('https://docs.seemytalent.xyz/about-cafecito.eth/about-me')}>About Us</a> */}
                    <a className="hidden sm:block text-md text-gray-400 font-bold hover:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" onClick={() => router.push('https://docs.seemytalent.xyz/')}>Docs</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:space-x-6">
                    <div className="relative">
                        <input
                            className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-gray-800 rounded-lg placeholder:text-gray-600 dark:placeholder:text-gray-300 font-medium pr-20"
                            type="text" placeholder="Search profile" />

                        <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                            <svg className="mr-2" style={{ width: 26, height: 26 }} viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
                <ConnectButton accountStatus="address" label="Sign in" />
            </nav >
        </div >
    )
}

export default Navbar;