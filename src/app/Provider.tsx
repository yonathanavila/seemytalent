"use client"
// import next/dynamic to load components dynamically
import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';
import { WagmiConfig } from 'wagmi';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider, useTheme } from 'next-themes'
import { RainbowKitProvider, darkTheme, lightTheme, midnightTheme } from '@rainbow-me/rainbowkit';

import store from '~/root/utils/store';
import { chains } from '~/root/utils/functions/provider';
import { wagmiClient } from '~/root/utils/functions/client';
import { chainSelected } from '~/root/utils/functions/chain';
import '@rainbow-me/rainbowkit/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react'


const myCustomTheme: any = {
    blurs: {
        modalOverlay: '...',
    },
    colors: {
        connectButtonBackground: '#203058',
        accentColor: '#203058',
        accentColorForeground: '#4C82FB',
        actionButtonBorder: '#000000',
        actionButtonBorderMobile: 'e8e8e8',
        actionButtonSecondaryBackground: '#203058',
        closeButton: '#000000',
        closeButtonBackground: '#ffffff',
        connectButtonBackgroundError: '#203058',
        connectButtonInnerBackground: '#203058',
        connectButtonText: '#F6F2F5',
        connectButtonTextError: '#000000',
        connectionIndicator: '#000000',
        downloadBottomCardBackground: '#000000',
        downloadTopCardBackground: '#000000',
        error: '#000000',
        generalBorder: '#203058',
        generalBorderDim: '#000000',
        menuItemBackground: '#908e8e',
        modalBackdrop: '...',
        modalBackground: '#2E3443',
        modalBorder: '#2E3443',
        modalText: '#ffffff',
        modalTextDim: '#ffffff',
        modalTextSecondary: '#ffffff',
        standby: '#ffffff',
    },
    radii: {
        actionButton: '8px',
        connectButton: '8px',
        menuButton: '8px',
        modal: '8px',
        modalMobile: '8px',
    },
};



function Providers({ children }: any) {
    const chainId: any = process.env.NEXT_PUBLIC_MAINNET_TESTNET === "mainnet" ? 0 : 0;
    const { theme, setTheme } = useTheme();

    return (
        <>
            <ThemeProvider attribute='class'>
                <Provider store={store}>
                    <SWRConfig
                        value={{
                            refreshInterval: 86400,
                            fetcher: (resource, init) =>
                                fetch(resource, init).then((res) => res.json()),
                        }}>
                        <WagmiConfig client={wagmiClient}>
                            <RainbowKitProvider
                                chains={chains}
                                initialChain={chainSelected[Number(chainId || 0)]}
                                theme={midnightTheme()}
                            >
                                {children}
                                <ToastContainer />
                                <Toaster />

                            </RainbowKitProvider>
                        </WagmiConfig>
                    </SWRConfig>
                </Provider>
            </ThemeProvider >
            <Analytics />
        </ >
    )
}

// dynamic export to avoid SSR
export default dynamic(() => Promise.resolve(Providers), {
    ssr: false,
});


