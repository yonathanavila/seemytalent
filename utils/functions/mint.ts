import { ethers } from 'ethers';
import ethToWei from './ethToWei';
import { ABI } from '~/root/abi/SeeMyTalent';
import { getMaxPriorityFeePerGas } from './getFee';
import { FetchSignerResult } from '@wagmi/core';
import getGasPrice from './getFILPrice';

const seeMyTalentAddress = process.env.NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS as string;
const gasLimit = (process.env.NEXT_PUBLIC_GAS_LIMIT || 11805182) as Number;

/// @notice Register Early Applicant
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
        value: ethToWei(String(fee))
    });

    try {
        const contract = new ethers.Contract(seeMyTalentAddress, ABI, signer);
        const tx = await contract.registerEarliestApplicant(root, ...args);
        const receipt = await tx.wait();
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

/// @notice Register Recruiter
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
        const contract = new ethers.Contract(seeMyTalentAddress, ABI, signer);
        const tx = await contract.registerRecruiter(root, ...args);
        const receipt = await tx.wait();

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

/// @notice Reveal Resume
interface RevealResponse {
    data: ethers.providers.TransactionReceipt;
    hasError: boolean;
}

export const reveal = async (
    provider: ethers.providers.Provider,
    signer: FetchSignerResult<ethers.Signer> | undefined,
    _identifier: string,
    _encodedApplicants: string[],
    fee: number
): Promise<RevealResponse> => {
    // Input parameter validation

    if (!provider || !signer || !_identifier || !_encodedApplicants || fee === undefined) {
        throw new Error('Invalid input parameters');
    }

    const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
    const args: any[] = [
        _identifier,
        _encodedApplicants,
        {
            gasLimit: gasLimit,
            maxPriorityFeePerGas: maxPriorityFee?.toString()
        }
    ];

    try {
        const contract = new ethers.Contract(seeMyTalentAddress, ABI, signer);
        const tx = await contract.reveal(...args);
        const receipt = await tx.wait();

        if (!receipt) {
            throw new Error('Transaction failed');
        }
        return {
            data: receipt,
            hasError: false
        };
    } catch (error: any) {
        console.error(error);
        throw new Error('Failed to reveal applicants');
    }
};

