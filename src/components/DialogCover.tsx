'use client'

import { useState } from "react"
interface PropsType {
    isExpanded?: boolean,
    handleChatClick?: () => void
}
export default function DialogCover({ isExpanded, handleChatClick }: PropsType) {

    const [isMute, setIsMute] = useState(false)
    const flag = './flags/UA.svg'

    const onMute = () => {
        setIsMute(!isMute)
    }

    return (
        <div className="absolute w-full flex justify-center z-20">
            <div className='dialog-coverage border border-solid border-[#8B5CF6] rounded-[18px]'>
                <div className="border-2 border-solid border-[#000000] rounded-[18px] h-full bg-[#171717] flex items-center justify-center px-4">
                    <div className="flex w-[86px] h-[38px]">
                        <button
                            onClick={onMute}
                            className=' dialog-cover-btn px-3 flex justify-between w-[100%]'
                        >
                            <img className="h-5" src={isMute ? './muted.svg' : './unmuted.svg'} alt="is muted" />
                            <div className="uppercase">{isMute ? 'off' : 'on'}</div>
                        </button>
                    </div>
                    <div className="flex items-center justify-center px-4">
                        <img src="./ai.svg" alt="ai animation" />
                    </div>
                    <div className="flex justify-between  w-[86px] h-[38px]">
                        <button
                            onClick={handleChatClick}
                            className='dialog-cover-btn w-[38px] justify-center'>
                            <img className="h-5" src={isExpanded ? './arrow-down.svg' : './arrow-up.svg'} alt="arrow" />
                        </button>
                        <button className='dialog-cover-btn justify-center overflow-hidden w-[38px]'>
                            <img src={flag} alt="flag" className="border rounded-full" />
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}