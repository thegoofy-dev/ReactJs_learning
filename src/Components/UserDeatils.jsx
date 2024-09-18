import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);

    const handleSave = () => {
        setUsers((currentUserState) =>
            currentUserState.map((currentUser) =>
                currentUser.id === user.id ? { ...currentUser, username, email } : currentUser
            )
        );
        setIsEditing(false);
    };

    const handleDelete = () => {
        setUsers((currentUserState) =>
            currentUserState.filter((currentUser) => currentUser.id !== user.id)
        );
    };

    return (
        <div>
            <b>ID:</b> <span>{user.id}</span> <br />
            <b>Username:</b>
            {isEditing ? (
                <input
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            ) : (
                <span>{user.username}</span>
            )}
            <br />

            <b>Email:</b>
            {isEditing ? (
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            ) : (
                <span>{user.email}</span>
            )}
            <br />
            
            <div>
                <button onClick={() => setIsEditing((prev) => !prev)}>
                    {isEditing ? "Cancel" : "Edit"}
                </button>
                <button onClick={handleDelete}>Delete</button>
                {isEditing && <button onClick={handleSave}>Save</button>}
            </div>
            <hr />
        </div>
    );
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    setUsers: PropTypes.func.isRequired,
};