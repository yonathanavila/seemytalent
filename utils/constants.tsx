
export const dafaultChainId: any = 534353;

export function capitalize(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const toHexString = (number: any) => {
    return "0x" + Number(number).toString(16);
}
