import { useEffect, useState } from "react";
import { PostContainer } from "./Components/POST/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import { useFetchUser } from "./utils/hooks/useFetchUser";

export default function App() {
  const { user, error, loading } = useFetchUser(1);
  // console.log("User:", user);
  // console.log("Loading:", loading);
  // console.log("Error:", error);

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!loading && !error && user) setUserData(user);
  }, [loading, user, error]);

  return (
    <>
      <UserContext.Provider value={{ ...userData, setData: setUserData }}>
        <div>
          {loading ? 'Loading...' : <PostContainer />}
        </div>
      </UserContext.Provider>
    </>
  );
}
