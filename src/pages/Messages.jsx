import { useDispatch, useSelector } from "react-redux";
import { chatSelector } from "../redux/store/reducer/chatSelector/selector";
import { Link } from 'react-router-dom';
import '../index.scss';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Messages() {
    const messages = useSelector(state => state.messages)

    const dispatch = useDispatch();

    const deleteMessage = (id) => {
        dispatch({ type: 'deleteMessage', payload: id })
    }

    const addMessage = (name) => {
        const obj = {
            name,
            id: Date.now()
        }
        dispatch({ type: 'addMessage', payload: obj })
    }

    return (
        <article>
            <h2>Dialogs</h2>
            {messages.map((messages) => (
                <div className='Dialogs'>
                    <Link className='PageLinks' to={`/message/${messages.id}`} key={messages.id}>
                        {messages.name}
                    </Link>
                    <DeleteIcon aria-label="delete" onClick={() => deleteMessage(messages.id)} />
                </div>
            ))}
            <Button variant="outlined" onClick={() => addMessage(prompt())}>Add Dialog</Button>
        </article>
    );
}

export default Messages;


