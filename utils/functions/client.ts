import { createClient } from 'wagmi'
import { connectors } from './connector';
import { provider } from './provider';

export const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider
});
