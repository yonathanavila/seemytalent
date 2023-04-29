import { ethers } from 'ethers';

export default function EthToWei(n: string) {
	return ethers.utils.parseUnits(n.toString(), 'ether');
}
