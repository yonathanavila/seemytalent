const CopyToClipboardButton = ({ text }: any) => {
    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(text);
            alert(`Copied to clipboard: ${text}`);
        } catch (error) {
            console.error(`Error copying to clipboard: ${error}`);
        }
    };

    return (
        <button
            className="py-3 px-4 w-[90%] block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75 opacity-50"
            onClick={handleCopyClick}
        >
            {text}
        </button>
    );
}

export default CopyToClipboardButton;