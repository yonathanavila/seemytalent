import { Chain, mainnet, filecoinHyperspace } from 'wagmi/chains';

export const chainSelected: Chain[] = [filecoinHyperspace];

export const chainId: any = chainSelected[0].id;