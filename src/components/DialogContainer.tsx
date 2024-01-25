'use client'

import { useEffect, useState } from "react";
import DialogCover from "./DialogCover";
import InputComponent from "./InputComponent";
import MessageList from "./MessageList";
import useScroll from "@/hooks/useScroll";
import useElementHeight from "@/hooks/useElementHeight";

const messages = [
    {
        id: '1',
        author: {
            avatar: "./ai.svg",
            name: "Great Name",
        },
        text: 'Не дышите.',
        audio: 'sasfasf'
    },
    {
        id: '2',
        author: {
            avatar: "./ai.svg",
            name: "Great Name",
        },
        text: 'Добрый день, меня зовут Юнити! Я ваш персональный помошник.',
        audio: 'sasfasf'
    },
    {
        id: '3',
        author: {
            avatar: "./ai.svg",
            name: "authorized.name",
        },
        text: 'Не дышите.',
        audio: 'sasfasf'
    },
    {
        id: '4',
        author: {
            avatar: "./ai.svg",
            name: "Great Name",
        },
        text: 'Не дышите.',
        audio: 'sasfasf'
    },
    {
        id: '5',
        author: {
            avatar: "./ai.svg",
            name: "Great Name",
        },
        text: 'Добрый день, меня зовут Юнити! Я ваш персональный помошник.',
        audio: 'sasfasf'
    },
    {
        id: '6',
        author: {
            avatar: "./ai.svg",
            name: "authorized.name",
        },
        text: 'Не дышите.',
        audio: 'sasfasf'
    },
    {
        id: '7',
        author: {
            avatar: "./ai.svg",
            name: "Great Name",
        },
        text: 'Не дышите.',
        audio: 'sasfasf'
    },
    {
        id: '8',
        author: {
            avatar: "./ai.svg",
            name: "Great Name",
        },
        text: 'Добрый день, меня зовут Юнити! Я ваш персональный помошник.',
        audio: 'sasfasf'
    },
    {
        id: '9',
        author: {
            avatar: "./ai.svg",
            name: "authorized.name",
        },
        text: 'Не дышите.',
        audio: 'sasfasf'
    },
]


export default function DialogContainer() {

    const [isExpanded, setIsExpanded] = useState(false);
    const { listRef, isScrolledToBottom, scrollToBottom } = useScroll(messages)
    const { elementRef, size } = useElementHeight()

    const handleChatClick = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        scrollToBottom()
    }, [size])

    return (
        <div className={`chat-container ${isExpanded ? 'expanded' : ''}`}>
            <div className="z-30 absolute flex justify-center w-full">
                <DialogCover isExpanded={isExpanded} handleChatClick={handleChatClick} />
            </div>
            <div className="flex-1 pt-9 w-full">
                <div className="shadow-lg shadow-black bg-gradient-to-b from-[#8B5CF6] to-[#171717] flex-1 max-[480px]:rounded-b-[18px] min-[480px]:rounded-[18px] h-full p-[1px]">
                    <div className="bg-gradient-to-b from-[#000000] to-[#171717] flex-1 max-[480px]:rounded-b-[18px] min-[480px]:rounded-[18px] overflow-hidden h-full">
                        <div className='pb-3 flex flex-col justify-end h-full'>

                            <div ref={listRef} className='pb-3 overflow-y-auto flex-1 scroll-smooth'>
                                <MessageList messages={messages} />
                            </div>

                            <div className='relative'>
                                <button
                                    onClick={scrollToBottom}
                                    className={`${isScrolledToBottom ? '' : 'opacity-100 -translate-y-[130%]'} absolute duration-300 opacity-0 transition-all  w-[48px] h-[48px] bg-[#171717] m-auto z-10 left-1/2 transform -translate-x-1/2 dialog-cover-btn`}>
                                    <img className="h-6" src='./arrow-down.svg' alt="arrow down" />
                                </button>
                                <div className={`${isScrolledToBottom ? '' : 'opacity-100 -translate-y-[100%]'} duration-300 absolute opacity-0 transition-all shadow-top h-0 z-0 w-full`} />
                                <div ref={elementRef} className="w-[310px] mx-auto z-20 relative">
                                    <InputComponent />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
} 