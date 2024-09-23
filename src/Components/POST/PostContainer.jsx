import { UserContext } from "../../utils/contexts/UserContext";
import { PostContent } from "./PostContent";
import { useContext } from "react";

export function PostContainer() {
  const userContextData = useContext(UserContext);

  console.log(userContextData)
  return (
    <div>
      <hr />
      <h4>PostConatiner</h4>
      <PostContent />
      <div>Display Name: {userContextData.displayName}</div>
    </div>
  );
}
