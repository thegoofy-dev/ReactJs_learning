import { useState } from "react";
import { UserDetails } from "./Components/UserDeatils";

export default function App() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [counter, setCounter] = useState(4);
    const [users, setUsers] = useState([
        { id: 1, username: "anson", email: "anson@gmail.com" },
        { id: 2, username: "john", email: "john@gmail.com" },
        { id: 3, username: "jane", email: "jane@gmail.com" },
    ]);

    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = { id: counter, username, email };
        setCounter((prevCounter) => prevCounter + 1);
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setUsername("");
        setEmail("");
    };

    return (
        <>
            <h2>
                Hola! This is our React Tutorial by
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#8212;
                Anson The Developer.
            </h2>
            <hr />

            <form onSubmit={handleAddUser}>
                <h3 className="addUser">Add User</h3>
                <div>
                    <label htmlFor="username">UserName:</label>
                    <input
                        value={username}
                        name="username"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    &emsp;
                    <label htmlFor="email">Email:</label>
                    <input
                        value={email}
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    &emsp;
                    <button type="submit">Add User</button>
                </div>
            </form>
            <hr />

            <div>
                {users.map((user) => (
                    <UserDetails key={user.id} user={user} setUsers={setUsers} />
                ))}
            </div>
        </>
    );
}
