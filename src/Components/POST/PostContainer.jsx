import { UserContext } from "../../utils/contexts/UserContext";
import { PostContent } from "./PostContent";
import { useContext } from "react";

export function PostContainer() {
  const userContextData = useContext(UserContext);

  // console.log(userContextData.setData);

  return (
    <div>
      <hr />
      <div>
        <span>Post Container</span>
      </div>
      <PostContent />
      <div>Name: {userContextData.name}</div>
      <div>ID: {userContextData.id}</div>
      <div>Email: {userContextData.email}</div>
      <div>UserName: {userContextData.username}</div>
    </div>
  );
}
