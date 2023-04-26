const CopyToClipboardButton = ({ title, text }: any) => {
    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(text);
            alert(`Copied to clipboard: ${text}`);
        } catch (error) {
            console.error(`Error copying to clipboard: ${error}`);
        }
    };

    return (
        <a
            className="flex items-start gap-0.5 py-2 px-3 bg-gray-700 border border-gray-300 rounded-lg transition ease-in-out duration-150 cursor-pointer inline-flex h-10"
            onClick={handleCopyClick}
        >
            <div className="flex items-start gap-0.5 w-fit-content flex-initial">
                <div className="flex flex-row items-center overflow-hidden gap-0.5">
                    <div className="text-gray-500 text-lg font-bold leading-5">
                        {title}
                    </div>
                </div>
            </div>
            <div className="text-white text-base font-medium leading-5">
                {text}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 96 96" width="1em" height="1em" focusable="false" shape-rendering="geometricPrecision" className="ml-2 block mt-1 w-3 h-3 text-gray-500"><path fill="currentColor" fill-rule="evenodd" d="M50 96c-7.732 0-14-6.268-14-14V42c0-7.732 6.268-14 14-14h24c7.732 0 14 6.268 14 14v40c0 7.732-6.268 14-14 14H50Zm-2-14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V42a2 2 0 0 0-2-2H50a2 2 0 0 0-2 2v40Z" clip-rule="evenodd"></path><path fill="currentColor" d="M22 0C14.268 0 8 6.268 8 14v40c0 7.732 6.268 14 14 14a6 6 0 0 0 0-12 2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2 6 6 0 0 0 12 0c0-7.732-6.268-14-14-14H22Z"></path></svg>
        </a>
    );
}

export default CopyToClipboardButton;