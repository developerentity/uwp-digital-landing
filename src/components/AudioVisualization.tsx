import { useEffect } from "react";
import { formatTime } from "@/utils/format-time";
import useAudioVisualization from "@/hooks/useAudioVisualization";


export default function AudioVisualization({ id, audioUrl, isRightSided, isFromInput, playedAudio, setPlayedAudio }: AudioVisualizationProps) {

    const containerId = id || 'waveform'
    const {
        isPlaying,
        duration,
        remainingTime,
        handleTogglePlay,
        onStopPlaying
    } = useAudioVisualization(audioUrl, containerId)
    const isThisItemShouldPlay = id === playedAudio;

    // stop all the other playing audio if this is played
    useEffect(() => {
        if (typeof setPlayedAudio === "function" && isPlaying && id) {
            setPlayedAudio(id)
        }
    }, [isPlaying])

    useEffect(() => {
        if (!isThisItemShouldPlay) {
            onStopPlaying()
        }
    }, [isThisItemShouldPlay])

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
    id?: string;
    audioUrl: string | null;
    isRightSided?: boolean;
    isFromInput?: boolean;
    playedAudio?: string | null;
    setPlayedAudio?: (id: string) => void;
}