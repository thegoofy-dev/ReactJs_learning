import { useState } from "react";
import { PostContainer } from "./Components/POST/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {

  const [userData, setUserData] = useState({
    id: 1,
    username: "Qayzer Gaming",
    email: "tillu@gmail.com",
    displayName: "Tillu Galoch",
  });
  return (
    <>
      <UserContext.Provider
        value={{...userData, setData: setUserData}}
      >
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </>
  );
}
