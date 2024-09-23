import { useContext } from "react";
import { UserContext } from "../../utils/contexts/UserContext";

export function PostContentButton() {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <hr />
      <h4>Post Content Button</h4>
      <span>UserName: {userContextData.username}</span>
    </div>
  );
}
