import { configureChains } from 'wagmi';
import { chainSelected } from './chain';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL as string;

export const { chains, provider } = configureChains(chainSelected, [
	publicProvider(),
	jsonRpcProvider({
		rpc: (chain): any => ({
			http: "https://rpc.mevblocker.io/"
		})
	})
]);
