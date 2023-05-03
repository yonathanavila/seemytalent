import { ethers } from 'ethers';

export interface IApplicantInformation {
    amount: number,
    address: string,
    identifier: string
}

export default function getEncode(
    applicantInformation: IApplicantInformation
): string {
    // Encode the function call data
    const encodedData = ethers.utils.defaultAbiCoder.encode(["uint256", "address", "bytes32"], [applicantInformation.amount, applicantInformation.address, applicantInformation.identifier]);
    return encodedData;
}