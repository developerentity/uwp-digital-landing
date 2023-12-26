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
            <div className="flex-1 pt-9 ">
                <div className="shadow-lg shadow-black bg-gradient-to-b from-[#8B5CF6] to-[#171717] flex-1 max-[480px]:rounded-b-[18px] min-[480px]:rounded-[18px] h-full p-[1px]">
                    <div className="bg-gradient-to-b from-[#000000] to-[#171717] flex-1 max-[480px]:rounded-b-[18px] min-[480px]:rounded-[18px] overflow-hidden h-full">
                        <div className='mx-auto w-[310px] pb-3 flex flex-col justify-end h-full'>

                            <div className="pb-3">
                                Не дышите.
                            </div>

                            <InputComponent />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
} 