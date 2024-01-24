import { MessageComponent } from "./MessageComponent";


export default function MessageList({ messages }: IProts) {

    return (
        <ul className="px-5">
            {messages.length && messages.map(item =>
                <MessageComponent key={item.id} message={item} />)}
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