import { ChangeEvent, useEffect, useRef, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";


export default function InputComponent() {

    const [text, setText] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };
    return (
        <div className="">
            <div className="flex justify-between items-center bg-[#404040] py-1.5 px-3 rounded-xl min-h-[40-px]">
                <button className="p-2 w-[36px] h-[28px] rounded-xl flex justify-center items-center">
                    <img src='./paperclip.svg' />
                </button>
                <ReactTextareaAutosize
                    value={text}
                    onChange={handleChange}
                    placeholder="Сообщение"
                    maxRows={8}
                    className="px-2 py-1 bg-[#171717] rounded-lg resize-none mx-3 text-sm"
                />
                <button className="p-1 w-[36px] h-[28px] bg-[#8B5CF6] hover:bg-[#7755c6] rounded-xl flex justify-center items-center">
                    <img src='./mic.svg' />
                </button>
            </div>
        </div>
    )
} 