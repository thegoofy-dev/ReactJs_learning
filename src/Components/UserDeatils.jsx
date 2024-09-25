import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    setUsers((currentUserState) =>
      currentUserState.map((currentUser) =>
        currentUser.id === user.id
          ? { ...currentUser, username, email }
          : currentUser
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
      {isEditing ? (
        <label htmlFor="username">Username: </label>
      ) : (
        <b>Username: </b>
      )}
      {isEditing ? (
        <input
          aria-label="username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      ) : (
        <span>{user.username}</span>
      )}
      <br />
      {isEditing ? <label htmlFor="email">Email: </label> : <b>Email: </b>}
      {isEditing ? (
        <input
          aria-label="email"
          id="email"
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
        <button data-testid={`edit-btn-${user.id}`} onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button data-testid={`delete-btn-${user.id}`} onClick={handleDelete}>Delete</button>
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
