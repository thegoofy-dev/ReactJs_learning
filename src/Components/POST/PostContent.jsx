import { useContext } from "react";
import { PostContentButton } from "./PostContentButton";
import { UserContext } from "../../utils/contexts/UserContext";

export function PostContent() {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <hr />
      <div>
        <h3>Post Content</h3>
      </div>
      <PostContentButton />
      <span>Email: {userContextData.email}</span>
    </div>
  );
}
