import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, trustWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { chains } from './provider';

export const connectors = connectorsForWallets([
	{
		groupName: 'Recommended',
		wallets: [metaMaskWallet({ chains }), trustWallet({ chains })]
	},
	{
		groupName: 'Others',
		wallets: [walletConnectWallet({ chains })]
	}
]);
