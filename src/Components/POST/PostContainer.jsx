import { UserContext } from "../../utils/contexts/UserContext";
import { PostContent } from "./PostContent";
import { useContext } from "react";

export function PostContainer() {
  const userContextData = useContext(UserContext);

  console.log(userContextData.setData);

  return (
    <div>
      <hr />
      <div>
        <span>Post Container</span>
      </div>
      <PostContent />
      <div>Display Name: {userContextData.displayName}</div>
    </div>
  );
}
