"use client"
import { useRouter } from 'next/navigation';


const Footer = () => {

    const router = useRouter();

    return (
        <div className="fixed bottom-0 w-full h-[70px] transition-colors duration-300 bg-gray-900 border-t-[1px] border-[#2E3443] lg:hidden md:hidden">
            <footer className="flex flex-col h-screen items-center justify-center">
                <div className="flex-grow m-5">
                    <a className="text-md text-white hover:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" target="_blank" onClick={() => router.push('/')}>Home</a>
                    <a className="text-md text-gray-400 font-bold hover:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" onClick={() => router.push('https://docs.seemytalent.xyz/about-cafecito.eth/about-me')}>About Us</a>
                    <a className="text-md text-gray-400 font-bold hover:bg-gray-800 hover:bg-opacity-50 hover:cursor-pointer p-3 rounded-xl" onClick={() => router.push('https://docs.seemytalent.xyz/')}>Docs</a>
                </div>
            </footer>
        </div>

    )
}

export default Footer