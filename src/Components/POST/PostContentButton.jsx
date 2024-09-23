import { useContext } from "react";
import { UserContext } from "../../utils/contexts/UserContext";

export function PostContentButton() {
  const { username, setData } = useContext(UserContext);

  return (
    <div>
      <hr />
      <div>
        <span>Post Content Button</span>
      </div>
      <span>UserName: {username}</span> <br />
      <button
        onClick={() => {
          setData((currentState) => ({
            ...currentState,
            displayName: "Updated Display Name",
          }));
        }}
      >
        Click Me
      </button>
    </div>
  );
}
