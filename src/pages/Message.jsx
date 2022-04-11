import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Message = () => {
    const { id } = useParams()

    const [message, setMessage] = useState(null)

    useEffect(effect => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(res => res.json())
            .then(data => setMessage(data))
    }, [id])


    return (
        <div>
            {message && (
                <>
                    <h2>{message.name}</h2>
                    <p>{message.body}</p>
                </>
            )}
        </div>
    );
};

export default Message;