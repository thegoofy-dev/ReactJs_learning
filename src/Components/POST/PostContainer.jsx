import { UserContext } from "../../utils/contexts/UserContext";
import { PostContent } from "./PostContent";
import { useContext } from "react";

export function PostContainer() {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <hr />
      <div>
        <h3>Post Container</h3>
      </div>
      <PostContent />
      <div>DisplayName: {userContextData.name}</div>
      <div>ID: {userContextData.id}</div>
      <div>Email: {userContextData.email}</div>
      <div>UserName: {userContextData.username}</div>
    </div>
  );
}
