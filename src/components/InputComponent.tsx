import useRecorder from "@/hooks/useRecorder";
import { UseRecorder } from "@/types/recorder";
import { formatMinutes, formatSeconds } from "@/utils/format-time";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import RecordButton from "./RecordButton";
import AddFileButton from "./AddFileButton";
import AudioVisualization from "./AudioVisualization";


export default function InputComponent() {

    const { recorderState, ...handlers }: UseRecorder = useRecorder();
    const { audio, recordingMinutes, recordingSeconds, initRecording } = recorderState;
    const { startRecording, saveRecording, cancelRecording } = handlers;
    const [isAudioRecLocked, setIsAudioRecLocked] = useState(false)

    const [text, setText] = useState<string>("");
    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const maxFileSize = 5242880;
    const [file, setFile] = useState<File | null>(null)
    const showFileSizeWarning = file?.size && file.size > maxFileSize
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setFile(file)
    };
    const onResetFile = () => setFile(null)

    const onStartRecording = () => {
        startRecording()
        console.log('startRecording')
    }
    const onSaveRecording = () => {
        saveRecording()
        console.log('saveRecording')
    }
    const onCancelRecording = () => {
        cancelRecording()
        console.log('cancelRecording')
    }

    // function createDownloadURL() {
    //     const blob = new Blob(recordedChunks, { type: 'audio/mp3' });
    //     const audioURL = URL.createObjectURL(blob);
    //     const downloadURL = audioURL.replace(/^data:audio\/[^;]+/, 'data:attachment/mp3');
    //     return downloadURL;
    // }

    // function uploadAudio() {
    //     const file = new File(recordedChunks, 'recorded_audio.mp3', { type: 'audio/mp3' });
    //     const formData = new FormData();
    //     formData.append('audio', file);
    //     // send formData with ajax
    // }

    const handleSent = () => { }

    return (
        <div className="relative bg-[#404040] py-1.5 px-3 rounded-xl min-h-[40-px]">
            <div className="flex justify-between items-end">

                {initRecording
                    ? <div className="flex items-center h-[28px]">
                        <div className=" bg-[#D03715] rounded-full w-[8px] h-[8px]" />
                        <div className="ps-[4px] w-[50px]">
                            <span>{formatMinutes(recordingMinutes)}</span>
                            <span>:</span>
                            <span>{formatSeconds(recordingSeconds)}</span>
                        </div>
                    </div>
                    : audio
                        ? <button
                            onClick={onCancelRecording}
                            className="px-1 w-[28px] h-[28px] rounded-xl flex justify-center items-center">
                            <Image src='./delete-icon.svg' alt='Reset audio' width={36} height={28} />
                        </button>
                        : <AddFileButton handleFileChange={handleFileChange} />}
                {initRecording || audio
                    ? initRecording
                        ? <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[138px] text-[10px] leading-3 text-center">
                            {isAudioRecLocked ? 'Для отмены нажмите вне поля' : 'Для отмены отпустите курсор вне поля'}
                        </div>
                        : <AudioVisualization audioUrl={audio} isFromInput />
                    : <div className="h-full flex justify-center w-[206px]">
                        <ReactTextareaAutosize
                            value={text}
                            onChange={handleTextChange}
                            placeholder="Сообщение"
                            maxRows={8}
                            className="px-2 py-1 bg-[#171717] rounded-lg resize-none  text-sm w-full h-full" />
                    </div>}
                {text || file || (!initRecording && audio)
                    ? <div className="relative w-[28px] h-[28px]">
                        <button
                            onClick={() => { }}
                            className={`${audio ? 'scaled' : ''} scalable-button`}>
                            <Image src='./send-icon.svg' alt="Send icon" width={14} height={18} />
                        </button>
                    </div>
                    : <RecordButton
                        isRecording={initRecording}
                        onStartRec={onStartRecording}
                        onStopRec={onSaveRecording}
                        onResetRec={onCancelRecording}
                        isAudioRecLocked={isAudioRecLocked}
                        setIsAudioRecLocked={setIsAudioRecLocked} />}

            </div>
            {file && <div className="mx-10">
                <div className="flex justify-between pt-1.5">
                    <p className="text-xs">{file.name}</p>
                    <button onClick={onResetFile}>
                        <Image src='./close-icon.svg' alt='Close' width={12} height={12} />
                    </button>
                </div>
                {showFileSizeWarning && <p className="text-[#E84F2D] text-[10px] pt-1">Допустимый размер файла до 5 MB</p>}
            </div>}
        </div>
    )
} 