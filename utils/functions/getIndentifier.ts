import { MerkleTree } from 'merkletreejs';
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";
import { IPersonalInformation } from '../types';

export default function GenerateMerkleTree(
    wallet: any,
    {
        id,
        address,
        name,
        email,
        phone,
        dateOfBirth,
        nationality
    }: IPersonalInformation
): any {
    try {

        const leaves = [
            id,
            wallet,
            address,
            name,
            email,
            phone,
            dateOfBirth,
            nationality
        ].map((leaf) => {
            const bytes = utf8ToBytes(leaf);
            const hash = keccak256(bytes);
            return hash;
        });

        // Generate Merkle tree
        const tree: any = new MerkleTree(leaves, keccak256, { sort: true });
        // Get Merkle root
        const root = tree.getRoot().toString('hex');
        console.log('Merkle root:', root);
        const leaves_ = tree.leaves.map((l: any) => `0x${l.toString('hex')}`);

        // delete last position of tree.leaves
        const proofNew = leaves_.slice(0, -1);

        const leaf = leaves_[7];
        console.log('Leaf:', leaf);

        return ({
            proofNew,
            leaf,
            root
        });
    } catch (error: any) {
        throw new Error(`[Error] GenerateMerkleTree: ${error.message}`);
    }
}

// Get proof
// Function to calculate the hash of a leaf node
function calculateHash(leaf: any) {
    try {
        const bytes = utf8ToBytes(leaf);
        const hash = keccak256(bytes);
        return hash;
    } catch (error: any) {
        throw new Error(`[Error] calculateHash: ${error.message}`);
    }
}

// Function to generate a proof for a specific data element
function generateProof(data: any, tree: any) {
    const index = tree.leaves.findIndex((d: any) => d.equals(calculateHash(data)));

    if (index === -1) {
        throw new Error('Data not found in Merkle Tree');
    }

    let proof: any = [];
    let position = index;

    for (let i = 0; i < tree.layers.length - 1; i++) {
        const level = tree.layers[i];
        const isRightNode = position % 2 === 1;
        const siblingPosition = isRightNode ? position - 1 : position + 1;

        if (siblingPosition < level.length) {
            proof.push(isRightNode ? level[siblingPosition] : level[position]);
        }

        position = Math.floor(position / 2);
    }

    return proof;
}