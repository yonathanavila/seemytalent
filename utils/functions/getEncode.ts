import { ethers } from 'ethers';

export interface IApplicantInformation {
    amount: number | string,
    address: string,
    identifier: string
}

export default function getEncode(
    applicantInformation: IApplicantInformation
): string {

    try {
        // Handle decimal numbers by multiplying with the appropriate factor
        const amountInWei = ethers.utils.parseUnits(applicantInformation.amount.toString(), 18);

        // Encode the function call data
        const encodedData = ethers.utils.defaultAbiCoder.encode(
            ["uint256", "address", "bytes32"],
            [amountInWei, applicantInformation.address, ('0x' + applicantInformation.identifier)]
        );

        return encodedData;

    } catch (error) {
        throw new Error(`[Error] getEncode: ${error.message}`);
    }
}
