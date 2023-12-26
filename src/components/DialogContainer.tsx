'use client'

import { useState } from "react";
import DialogCover from "./DialogCover";
import InputComponent from "./InputComponent";

export default function DialogContainer() {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleChatClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`chat-container ${isExpanded ? 'expanded' : ''}`}>
            <DialogCover isExpanded={isExpanded} handleChatClick={handleChatClick} />
            <div className="bg-gradient-to-b from-[#000000] to-[#171717] border border-solid border-[#8B5CF6] flex-1 mt-9 max-[480px]:rounded-b-[18px] min-[480px]:rounded-[18px] overflow-hidden">
                <div className='mx-auto w-[310px] pb-3 flex flex-col justify-end h-full'>

                    <div className="pb-3">
                        Не дышите.
                    </div>

                    <InputComponent />
                </div>
            </div>
        </div>
    )
} 