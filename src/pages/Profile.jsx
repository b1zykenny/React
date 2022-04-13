import { useSelector } from "react-redux";


function Profile() {
    const contacts = useSelector((state) => {
        return state.contacts
    })

    const isActive = useSelector(state => {
        return state.isActive
    })

    return (
        <div>
            Профиль пользователя
            {contacts.map((contact) => (
                <li key={contact.name}>
                    {contact.name}
                </li>
            ))}
            <input type='checkbox' checked={isActive} />
        </div>
    );
}

export default Profile;