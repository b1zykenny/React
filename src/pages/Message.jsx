import { useEffect, useState, useSelector } from 'react-redux';


function Message() {
    const messages = useSelector((state) => {
        return state.messages
    })

    return (
        <div>
            Dialog
            {messages.map((message) => (
                <li key={message.name}>
                    {message.name}
                </li>
            ))}
        </div>
    );
}

export default Message;