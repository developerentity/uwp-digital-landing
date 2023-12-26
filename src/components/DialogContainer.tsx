'use client'

import { ChangeEvent, useEffect, useState } from "react";
import DialogCover from "./DialogCover";

export default function DialogContainer() {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleChatClick = () => {
        setIsExpanded(!isExpanded);
    };


    const [text, setText] = useState('');
    const [height, setHeight] = useState(18);

    useEffect(() => {
        console.log(height)
    }, [text])


    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
        setHeight(event.target.scrollHeight);
    };

    return (
        <div className={`chat-container ${isExpanded ? 'expanded' : ''}`}>
            <DialogCover isExpanded={isExpanded} handleChatClick={handleChatClick} />
            <div className="bg-gradient-to-b from-[#000000] to-[#171717] border border-solid border-[#8B5CF6] flex-1 mt-9 max-[480px]:rounded-b-[18px] min-[480px]:rounded-[18px]">
                <div className='px-5 pt-10'>
                    <div>
                        MESSAGES
                    </div>
                    {/* <div className="flex-1">
                        <div className="input-container flex justify-between bg-[#404040] py-2 px-3 rounded-xl">
                            <button className="p-1 w-[52px] h-[52px] bg-[#8B5CF6] rounded-xl flex justify-center items-center">
                                <img className="w-[2rem]" src='./paperclip.svg' />
                            </button>
                            <textarea className="w-[77%] text-lg p-2 max-h-[1642px]   bg-[#171717] rounded-xl h-150 min-h-150 resize-y overflow-auto" />
                            <textarea
                                value={text}
                                onChange={handleChange}
                                style={{ height: `${height}px` }}
                                className="resize-y overflow-auto text-lg bg-[#171717] rounded-xl p-2"
                            />
                            <button className="p-1 w-[52px] h-[52px] bg-[#8B5CF6] rounded-xl flex justify-center items-center">
                                <img className="w-[1.5rem]" src='./mic.svg' />
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
} 