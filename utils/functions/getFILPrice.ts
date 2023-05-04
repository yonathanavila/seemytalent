const RPC_URL = process.env.NEXT_PUBLIC_ASSET_FIL as string;

export const getFILPrice = (amount: any, array?: boolean) => {
    try {
        if (array) {
            let total = 0;
            amount?.fee?.forEach((element: number) => {
                total += (5.5 * element);
            });
            return total;
        } else {
            return (5.5 * amount).toFixed(2);
        }


    } catch (err) {
        console.error(err);
    }
}

export default getFILPrice;