'use client'

import { useEffect, useState, MouseEvent } from "react"
import { useSwipeable } from "react-swipeable";


export default function RecordButton({ onStartRec, onStopRec, onResetRec, isAudioRecLocked, setIsAudioRecLocked }: IProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [isCursorOverMainButton, setIsCursorOverMainButton] = useState(false);

    const config = {
        trackMouse: true,
    }

    const handlers = useSwipeable({
        onSwiped: (eventData) => onLeaveButtonHandler(eventData.dir),
        ...config,
    });

    const onLeaveButtonHandler = (direction: string) => {
        if (direction === "Up") {
            setIsAudioRecLocked(true)
        } else {
            setIsRecording(false)
            isRecording && onResetRec()
        }
    }

    const handleMouseDown = () => {
        if (!isAudioRecLocked) {
            setIsRecording(true);
            onStartRec();
        } else {
            isRecording && onStopRec();
            setIsRecording(false);
            setTimeout(() => {
                setIsAudioRecLocked(false)
            }, 400)
        }
    };

    const handleMouseUp = () => {
        if (isCursorOverMainButton) {
            isRecording && onStopRec();
            setIsRecording(false);
            setTimeout(() => {
                setIsAudioRecLocked(false)
            }, 400)
        }
    };

    const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = event;
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        const isOverMainButton =
            clientX >= rect.left &&
            clientX <= rect.right &&
            clientY >= rect.top &&
            clientY <= rect.bottom;

        setIsCursorOverMainButton(isOverMainButton);
    };

    const outsideElement = document.getElementById('recButton');

    const handleClickOutside = (event: Event) => {
        if (!outsideElement?.contains(event.target as Node) && isRecording) {
            onResetRec()
            setIsRecording(false)
            setTimeout(() => {
                setIsAudioRecLocked(false)
            }, 400)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isRecording, isAudioRecLocked]);

    return (
        <div id='recButton' {...handlers} className="relative w-[28px] h-[28px]">
            <button className={`lock-button ${isRecording ? 'lock-has-slid' : ''}`}>
                <img
                    src={isAudioRecLocked ? './lock-rec-icon.svg' : './unlock-rec-icon.svg'}
                    className="pointer-events-none"
                    alt="Mic icon"
                    width={14}
                    height={18}
                />
                {!isAudioRecLocked && <img
                    src='lock-arrow-icon.svg'
                    className="pointer-events-none mt-1.5"
                    alt="Mic icon"
                    width={14}
                    height={18}
                />}
            </button>
            <button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`${isRecording ? 'scaled' : ''} scalable-button`}
            >
                <img className="pointer-events-none" src='./mic.svg' alt="Mic icon" width={14} height={18} />
            </button>
        </ div>
    )
}

interface IProps {
    onStartRec: () => void
    onStopRec: () => void
    onResetRec: () => void
    isAudioRecLocked: boolean
    setIsAudioRecLocked: (vel: boolean) => void
}
