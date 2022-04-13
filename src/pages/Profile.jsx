import { useSelector } from "react-redux";


function Profile() {
    const messages = useSelector((state) => {
        return state.messages
    })

    const isActive = useSelector(state => {
        return state.isActive
    })

    return (
        <div>
            Профиль пользователя
            {messages.map((message) => (
                <li key={message.name}>
                    {message.name}
                </li>
            ))}
            <input type='checkbox' checked={isActive} />
        </div>
    );
}

export default Profile;