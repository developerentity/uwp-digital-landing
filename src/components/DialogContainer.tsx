'use client'

import { useState } from "react";
import DialogCover from "./DialogCover";


export default function DialogContainer() {

    const [isExpanded, setIsExpanded] = useState(true);

    const handleChatClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`chat-container flex ${isExpanded ? 'expanded' : ''}`}>
            <DialogCover isExpanded={isExpanded} handleChatClick={handleChatClick} />
            <div className="bg-red-400 flex-1 mt-9 rounded-b-[24px] sm:rounded-[24px]">

            </div>
        </div>
    )
} 