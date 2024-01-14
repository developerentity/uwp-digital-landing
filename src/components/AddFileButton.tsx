import Image from "next/image";
import { ChangeEvent } from "react";


export default function AddFileButton({ handleFileChange }: IProps) {

    return (
        <button>
            <label htmlFor="fileInput" className="px-1 w-[28px] h-[28px] rounded-xl flex justify-center items-center cursor-pointer">
                <Image src='./paperclip.svg' alt='Paperclip' width={36} height={28} />
            </label>
            <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
            />
        </button>
    )
}

interface IProps {
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void
}