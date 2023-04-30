import { useEffect, useState } from "react";
const useEnsName = (address: `0x${string}` | undefined | string) => {

    const [ensName, setEnsName] = useState<undefined | string>(undefined);

    const getEns = () => {
        setEnsName(undefined)
    }

    useEffect(() => {
        if (address) {
            getEns();
        }
    }, [address]);

    return { ensName };
}

export default useEnsName;