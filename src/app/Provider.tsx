"use client"
import dynamic from 'next/dynamic';

function Providers({ children }: any) {
    return (
        <div>
            {children}
        </div >
    )
}

export default dynamic(() => Promise.resolve(Providers), { ssr: false });
