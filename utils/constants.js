
export const dafaultChainId = 534353;

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const toHexString = (number) => {
    return "0x" + Number(number).toString(16);
}

export const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 60) {
        interval = Math.floor(interval / 60);
        return interval + " hours ago";
    }
    return interval + " minutes ago";
}

