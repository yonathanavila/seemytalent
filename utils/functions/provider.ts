import { configureChains } from 'wagmi';
import { chainSelected } from './chain';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(chainSelected, [
	publicProvider(),
	jsonRpcProvider({
		rpc: (chain): any => ({
			http: chain.rpcUrls.default
		})
	})
]);
