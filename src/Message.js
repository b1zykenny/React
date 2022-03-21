import React from "react";

const Message = ({ text }) => {
    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <h1 className="Msg">Hello, {text}!</h1>
        </div>
    );
}

export default Message;