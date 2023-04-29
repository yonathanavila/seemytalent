import { ethers } from 'ethers';
import ethToWei from './ethToWei';
import { contractABI } from '@/abi/SeeMyTalent';
import { getMaxPriorityFeePerGas } from './getFee';

const seeMyTalentAddress = process.env.NEXT_PUBLIC_MAIN as string;
const gasLimit = (process.env.NEXT_PUBLIC_GAS_LIMIT || 1864222) as Number;

export const mintResume = async (
    provider: any,
    signer: any,
    fee: number, // in ETH
    root?: string
) => {
    const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
    let args: Array<any> = [];

    args.push({
        gasLimit: gasLimit,
        maxPriorityFeePerGas: maxPriorityFee?.toString(),
        value: ethToWei(String(fee))
    });

    try {
        const contract = new ethers.Contract(seeMyTalentAddress, contractABI, signer);
        const tx = await contract.registerEarliestApplicant(root, ...args);
        const receipt = await tx.wait();
        console.log(receipt);
        if (!receipt) {
            throw new Error('Tx failed');
        }
        return {
            data: receipt,
            hasError: false
        };
    } catch (error: any) {
        throw new Error(error);
    }
};


export const registerRecruiter = async (
    provider: any,
    signer: any,
    fee: number, // in ETH
    root?: string
) => {
    const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
    let args: Array<any> = [];

    args.push({
        gasLimit: gasLimit,
        maxPriorityFeePerGas: maxPriorityFee?.toString(),
        value: ethToWei(String(fee))
    });

    try {
        const contract = new ethers.Contract(seeMyTalentAddress, contractABI, signer);
        const tx = await contract.registerRecruiter(root, ...args);
        const receipt = await tx.wait();
        console.log(receipt);
        if (!receipt) {
            throw new Error('Tx failed');
        }
        return {
            data: receipt,
            hasError: false
        };
    } catch (error: any) {
        throw new Error(error);
    }
};