import Image from "next/image";
import { ChangeEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";


export default function InputComponent() {

    const [text, setText] = useState<string>("");
    const [blob, setBlob] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSent = () => {

    }

    return (
        <div className="">
            <div className="bg-[#404040] py-1.5 px-3 rounded-xl min-h-[40-px]">
                <div className="flex justify-between items-end">
                    <button className="px-1 w-[36px] h-[28px] rounded-xl flex justify-center items-center">
                        <Image src='./paperclip.svg' alt='Paperclip' width={36} height={28} />
                    </button>
                    <ReactTextareaAutosize
                        value={text}
                        onChange={handleChange}
                        placeholder="Сообщение"
                        maxRows={8}
                        className="px-2 py-1 bg-[#171717] rounded-lg resize-none mx-3 text-sm w-full"
                    />
                    <button
                        onClick={handleSent}
                        className="p-1 w-[36px] h-[28px] bg-[#8B5CF6] hover:bg-[#7755c6] rounded-xl flex justify-center items-center">
                        <img src={text ? './send-icon.svg' : './mic.svg'} />
                    </button>
                </div>
                {blob && <div className="mx-10">
                    <div className="flex justify-between pt-1.5">
                        <p className="text-xs">{'name of the lile .txt'}</p>
                        <button>
                            <Image src='./close-icon.svg' alt='Close' width={12} height={12} />
                        </button>
                    </div>
                    {true && <p className="text-[#E84F2D] text-[10px] pt-1">Допустимый размер файла до 5 MB</p>}
                </div>}
            </div>
        </div>
    )
} 