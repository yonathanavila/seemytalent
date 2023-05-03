import { ethers } from 'ethers';

export default function EthToWei(n: string) {
	try {
		return ethers.utils.parseUnits(n.toString(), 'ether');
	} catch (error) {
		throw new Error(`[Error] EthToWei: ${error.message}`);
	}
}
