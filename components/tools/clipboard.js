import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Clipboard ({data}) {
	const [tooltip, setTooltip] = useState('opacity-0');
	const copyToClipboard = (data) => {
		navigator.clipboard.writeText(data);
		
		setTooltip('opacity-100');
		
		setTimeout(() => {
      setTooltip('opacity-0');
    }, 1500);
	}

  return (
    <button 
			className="p-2 absolute right-2 top-1/2 translate-y-[-50%] hover:text-gray-300 ease-in-out duration-300"
			title="Copy to clipboard"
			onClick={() => copyToClipboard(data)}
    >
			<FontAwesomeIcon icon={faClipboard} className='w-4 h-4' />
			<span className={`text-xs font-sans absolute bottom-full right-[-50%] bg-slate-600 ease-in-out duration-300 py-1 px-2 rounded-md ${tooltip}`}>Copied!</span>
    </button>
    )
}
