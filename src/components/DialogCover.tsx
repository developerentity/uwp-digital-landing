'use client'

import { useState } from "react"

export default function DialogCover() {

    const [isOpen, setIsOpen] = useState(false)
    const [isMute, setIsMute] = useState(false)
    const flag = './flags/UA.svg'

    const onOpen = () => {
        setIsOpen(!isOpen)
    }

    const onMute = () => {
        setIsMute(!isMute)
    }

    return (
        <div className='dialog-cover-bg  pt-3 overflow-hidden px-6 relative flex justify-between items-center'>
            <button
                onClick={onMute}
                className='dialog-cover-btn w-20  py-2 px-2.5 uppercase    justify-between text-gray-500'>
                <img className="h-5" src={isMute ? './muted.svg' : './unmuted.svg'} alt="is muted" />
                <div className="">{isMute ? 'off' : 'on'}</div>
            </button>

            <div className='absolute z-10 transform -translate-x-1/2 left-1/2 top-2.5'>
                <img src="./ai.svg" alt="ai" />
            </div>

            <div className='flex justify-between'>
                <button
                    onClick={onOpen}
                    className='dialog-cover-btn w-8 p-1.5    justify-center'>
                    <img className="h-5" src={isOpen ? './arrow-down.svg' : './arrow-up.svg'} alt="arrow" />
                </button>
                <button className='dialog-cover-btn w-8    justify-center overflow-hidden ms-3'>
                    <img  src={flag} alt="flag" />
                </button>
            </div>
        </div>
    )
}