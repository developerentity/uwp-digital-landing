import { useEffect, useRef, useState } from "react";
import WaveSurfer from 'wavesurfer.js'
import { formatTime } from "@/utils/format-time";


export default function AudioVisualization({ id, audioUrl, isRightSided, isFromInput, handleAudioPlaying }: AudioVisualizationProps) {

    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState<number>(0);
    const [remainingTime, setRemainingTime] = useState<number>(0);

    const containerId = id || 'waveform'

    useEffect(() => {
        wavesurferRef.current = WaveSurfer.create({
            container: `#${containerId}`,
            waveColor: '#9CA3AF',
            progressColor: '#8B5CF6',
            interact: false,
            cursorWidth: 0,
            barWidth: 2,
            barGap: 2,
            height: 28,
            width: 100,
        });

        setTimeout(() => {
            audioUrl && wavesurferRef.current?.load(audioUrl);
        }, 200)

        wavesurferRef.current.on('ready', () => {
            const trackDuration = wavesurferRef.current?.getDuration();
            trackDuration && setDuration(trackDuration);
        });

        wavesurferRef.current.on('audioprocess', () => {
            if (wavesurferRef.current?.isPlaying()) {
                const totalTime = wavesurferRef.current.getDuration(),
                    currentTime = wavesurferRef.current.getCurrentTime(),
                    remainingTime = totalTime - currentTime;
                setRemainingTime(remainingTime)
            }
        });

        wavesurferRef.current.on('play', () => {
            setIsPlaying(true);
        });

        wavesurferRef.current.on('pause', () => {
            setIsPlaying(false);
        });

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
            }
        };
    }, [audioUrl]);

    useEffect(() => {
        if (typeof handleAudioPlaying === 'function') {
            handleAudioPlaying(isPlaying)
        }
    }, [isPlaying])

    const handleTogglePlay = () => {
        if (wavesurferRef.current) {
            if (isPlaying) {
                wavesurferRef.current.pause();
            } else {
                wavesurferRef.current.play();
            }
        }
    };

    const bgColor = isFromInput
        ? 'bg-[#171717]'
        : isPlaying
            ? 'bg-[#4A3D6B]'
            : 'bg-[#404040]'

    return (
        <div className={`${isRightSided ? 'flex-row-reverse' : ''} ${bgColor} flex justify-between w-[206px] h-[28px] rounded-full p-[1px]`}>
            <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#404040]">
                <button onClick={handleTogglePlay} className="flex justify-center items-center rounded-full w-[22px] h-[22px] p-[2px] bg-black">
                    {isPlaying
                        ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#A8A8A8" className="w-4 h-4">
                            <path d="M4.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1ZM10.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1Z" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#A8A8A8" className="w-4 h-4 color-[#404040]">
                            <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
                        </svg>}
                </button>
            </div>
            <div id={containerId}></div>
            <div className={`${isRightSided ? 'ps-3' : 'pe-3'} w-[36px] align-middle text-xs font-extralight flex items-center`}>
                {remainingTime !== 0
                    ? formatTime(parseInt(remainingTime.toFixed(), 10))
                    : formatTime(parseInt(duration.toFixed(), 10))}
            </div>
        </div>
    );
}

interface AudioVisualizationProps {
    id?: string
    audioUrl: string | null;
    isRightSided?: boolean;
    isFromInput?: boolean;
    handleAudioPlaying?: (val: boolean) => void;
}