import React, { useState } from "react";
import "./form.scss";
import { Button } from "@mui/material";
import SendIcon from "@material-ui/icons/Send";
import TextField from '@mui/material/TextField';

const Form = ({ create }) => {
    const [message, setMessage] = useState({
        author: "",
        textMessage: "",
    });

    const addNewMessage = (e) => {
        e.preventDefault();
        const newMessage = {
            ...message,
            id: Date.now(),
        };

        setTimeout(() => {
            create(newMessage);
            window.scrollTo(500, document.body.scrollHeight, { behavior: "smooth" });
        }, 1);
        setMessage({ author: message.author, textMessage: "" });
    };

    return (
        <div className="wrap">
            <form className="form">
                <div className="form-control">
                    <TextField autoFocus
                        onChange={(e) => setMessage({ ...message, author: e.target.value })}
                        type="text"
                        placeholder="YourName"
                        value={message.author}
                    />
                </div>
                <div className="form-control">
                    <TextField
                        onChange={(e) =>
                            setMessage({ ...message, textMessage: e.target.value })
                        }
                        placeholder="Example"
                        value={message.textMessage}
                    />
                </div>
                <div className="msg-btn">
                    <Button variant="contained" endIcon={<SendIcon />} onClick={addNewMessage}></Button>
                </div>
            </form>
        </div>
    );
};

export default Form;