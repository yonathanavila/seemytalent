"use client";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes'

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

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        window.location.reload()
    };

    const handleDarkMode = () => {
        localStorage.theme = 'dark';
    };

    const handleRespectOsPreference = () => {
        localStorage.removeItem('theme');
    };

    const { theme, setTheme } = useTheme()

    return (
        <div className={`z-10 fixed top-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-white  dark:bg-gray-900  border-b-[1px] border-[#D2D9EE] dark:border-[#2E3443]' : 'bg-transparent'
            }`}>
            <nav className="p-5 w-full h-18 z-2 px-4 py-4 flex justify-between lg:items-center z-100">
                <div className="font-bold text-md flex items-center" >
                    <Image src={'/img/SeeMyTalent.png'} alt="SeeMyTalent" width={35} height={35} className="m-2 hover:cursor-pointer" onClick={() => router.push('/')} />
                    <a className="hidden sm:block text-black dark:text-white hover:bg-gray-300 hover:dark:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" target="_blank" onClick={() => router.push('/')}>Home</a>
                    <a className="hidden sm:block text-black dark:text-gray-400 hover:bg-gray-300 hover:dark:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" onClick={() => router.push('/profile')}>Collection</a>
                    <a className="hidden sm:block text-black dark:text-gray-400 hover:bg-gray-300 hover:dark:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" onClick={() => router.push('https://docs.seemytalent.xyz/')}>Docs</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:space-x-6">
                    <div className="relative">
                        <input
                            className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-gray-800 rounded-lg placeholder:text-gray-600 dark:placeholder:text-gray-300 font-medium pr-20"
                            type="text" placeholder="Search profile" />

                        <span className="flex absolute right-3 top-2/4 -mt-3 items-center text-gray-600 dark:text-white">
                            <svg className="mr-2" style={{ width: 26, height: 26 }} viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>

                <div
                    onClick={handleChangeTheme}
                    className="absolute top-1/2 left-1/2 transform -translate-y-1/2 text-md dark:text-white font-bold hover:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl"
                >
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun w-5 h-5 text-yellow-500">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon w-5 h-5 text-gray-500">
                            <path d="M12 2a10 10 0 000 20c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>

                    )}

                </div>

                <ConnectButton accountStatus="address" label="Sign in" />
            </nav >
        </div >
    )
}

export default Navbar;