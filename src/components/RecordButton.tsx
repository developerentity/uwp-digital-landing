'use client'

import { useEffect, useState, MouseEvent } from "react"
import { useSwipeable } from "react-swipeable";


export default function RecordButton({
    isRecording,
    onStartRec,
    onStopRec,
    onResetRec,
    isAudioRecLocked,
    setIsAudioRecLocked
}: IProps) {

    const [isCursorOverMainButton, setIsCursorOverMainButton] = useState(false);
    const [isRecordLessThanOneSecond, setIsRecordLessThanOneSecond] = useState(false)

    const config = {
        trackMouse: true,
    }

    const onStartHandler = () => {
        onStartRec()
        setIsRecordLessThanOneSecond(true)
        setTimeout(() => {
            setIsRecordLessThanOneSecond(false)
        }, 1000)
    }

    const onResetOnlyWhenRecording = () => isRecording && onResetRec()

    const handlers = useSwipeable({
        onSwiped: (eventData) => onLeaveButtonHandler(eventData.dir),
        ...config,
    });

    const onLeaveButtonHandler = (direction: string) => {
        if (direction === "Up") {
            setIsAudioRecLocked(true)
        } else {
            onResetOnlyWhenRecording()
        }
    }

    const handleMouseDown = () => {
        if (!isRecording) {
            onStartHandler();
        } else {
            onStopRec();
            setIsAudioRecLocked(false)
        }
    };

    const handleMouseUp = () => {
        if (isCursorOverMainButton && isRecording) {
            if (isRecordLessThanOneSecond) {
                onResetOnlyWhenRecording()
            } else {
                onStopRec();
            }
            setIsAudioRecLocked(false)
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

    const handleClickOutside = (event: Event) => {
        const outsideElement = document.getElementById('recButton');
        if (!outsideElement?.contains(event.target as Node)) {
            onResetOnlyWhenRecording()
            setTimeout(() => {
                setIsAudioRecLocked(false)
            }, 100)
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
    isRecording: boolean
    onStartRec: () => void
    onStopRec: () => void
    onResetRec: () => void
    isAudioRecLocked: boolean
    setIsAudioRecLocked: (vel: boolean) => void
}