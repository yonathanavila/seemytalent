"use client"
import { SWRConfig } from 'swr';
import dynamic from 'next/dynamic';
import { WagmiConfig } from 'wagmi';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { wagmiClient } from '../../utils/functions/client';
import { chainSelected } from '../../utils/functions/chain';
import { chains } from '../../utils/functions/provider';
import '@rainbow-me/rainbowkit/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import store from '@/utils/store';


const myCustomThem: any = {
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

    return (
        <div>
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
                            theme={myCustomThem}
                        >
                            {children}
                            <ToastContainer />
                        </RainbowKitProvider>
                    </WagmiConfig>
                </SWRConfig>
            </Provider>
        </div >
    )
}

export default dynamic(() => Promise.resolve(Providers), { ssr: false });

