export const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const validateEther = (value: any) => {
    const etherRegex = /^(0|[1-9]\d*)(\.\d+)?$/;
    return etherRegex.test(value);
}
