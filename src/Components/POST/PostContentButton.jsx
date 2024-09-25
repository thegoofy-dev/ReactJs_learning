import { useContext, useState } from "react";
import { UserContext } from "../../utils/contexts/UserContext";

export function PostContentButton() {
  const { username, setData } = useContext(UserContext);
  const [value, setValue] = useState("");

  return (
    <div>
      <hr />
      <div>
        <h3>Post Content Button</h3>
      </div>
      <span>UserName: {username}</span> <br />
      <label htmlFor="updateName">UpdateName:</label>
      <input
        id="updateName"
        name="updateName"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setData((currentState) => ({
            ...currentState,
            name: value,
          }));
        }}
      >
        Save Display Name
      </button>
    </div>
  );
}
