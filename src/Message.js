import Avatar from '@mui/material/Avatar';

const Message = ({ message }) => {
    return (
        <div className="message">
            <div className="messageZone">
                <Avatar alt="User" src="/static/images/avatar/1.jpg" /><p> {message.author}</p>
            </div>
            <blockquote>{message.textMessage}</blockquote>
        </div>
    );
};

export default Message;