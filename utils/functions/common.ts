const getAddress = (address: undefined | null | string) => {
    if (!address) { return }
    return address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length)
}

export default getAddress
