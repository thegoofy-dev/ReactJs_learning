import { useState } from "react";

export function RegisterForm() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [displayName, setDisplayName] = useState("");

  // const isDisabled = !username || !password || !displayName;

  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  return (
    <form>
      <div>
        <label htmlFor="username">UserName:</label>
        <input
          id="username"
          value={formFields.username}
          onChange={(e) => {
            setFormFields((currentSate) => ({
              ...currentSate,
              username: e.target.value,
            }));
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={formFields.password}
          onChange={(e) => {
            setFormFields((currentSate) => ({
              ...currentSate,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="displayName">DisplayName:</label>
        <input
          id="displayName"
          value={formFields.displayName}
          onChange={(e) => {
            setFormFields((currentSate) => ({
              ...currentSate,
              displayName: e.target.value,
            }));
          }}
        />
      </div>
      {/* <button disabled={isDisabled}>Login</button> */}

      <div>
        <h3>UserName:</h3> <span>{formFields.username}</span>
        <h3>Password:</h3> <span>{formFields.password}</span>
        <h3>DisplayName:</h3> <span>{formFields.displayName}</span>
      </div>
    </form>
  );
}
