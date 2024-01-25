import AudioVisualization from "./AudioVisualization"
import AvatarPlug from "./AvatarPlug"
import { replaceDigitsWithLetters } from "@/handlers/format-id"


export function MessageComponent({ message, playedAudio, setPlayedAudio }: IProps) {

    const { id, author, text, audio } = message
    const isFromThisUser = author.name === 'authorized.name'
    const formattedId = replaceDigitsWithLetters(id)
    const isAudioPlaying = formattedId === playedAudio

    return (
        <div className={`${isFromThisUser ? 'flex-row-reverse' : 'flex-row'} flex mt-3`}>
            <div>
                {!isFromThisUser
                    ? <div className="pointer-events-none rounded-full w-[26px] h-[26px]">
                        <img src={author.avatar} alt="avatar" className="pointer-events-none" />
                    </div>
                    : <AvatarPlug />}
            </div>
            <div className={`${isFromThisUser ? 'items-end text-end' : ''} flex flex-col mx-2 text-sm`}>
                <div className={`${isAudioPlaying ? 'text-[#BE9FFE]' : 'text-[#ffffff]'}`}>
                    {text}
                </div>
                {audio && <div className="mt-2">
                    <AudioVisualization
                        id={formattedId}
                        audioUrl={audio}
                        isRightSided={isFromThisUser}
                        playedAudio={playedAudio}
                        setPlayedAudio={setPlayedAudio} />
                </div>}
            </div>
        </div>
    )
}

interface IProps {
    message: {
        id: string
        author: {
            name: string
            avatar: string
        }
        text: string
        audio?: string
    },
    playedAudio: string | null
    setPlayedAudio: (id: string) => void
}