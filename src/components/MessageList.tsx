import { useState } from "react";
import { MessageComponent } from "./MessageComponent";


export default function MessageList({ messages }: IProts) {

    // for automatically stop playing other audio messages while playing the last one
    const [playedAudio, setPlayedAudio] = useState<string | null>(null);

    return (
        <ul className="px-5">
            {messages.length && messages.map(item =>
                <MessageComponent key={item.id} message={item} playedAudio={playedAudio} setPlayedAudio={setPlayedAudio} />)}
        </ul>
    )
}

interface IProts {
    messages: Array<{
        id: string;
        author: {
            avatar: string;
            name: string;
        };
        text: string;
        audio: string;
    }>
}