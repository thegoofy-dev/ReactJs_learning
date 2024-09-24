import { useEffect, useState } from "react";
import { PostContainer } from "./Components/POST/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import { useFetchUser } from "./utils/hooks/useFetchUser";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function App() {
  const { user, error, loading } = useFetchUser(1);
  // console.log("User:", user);
  // console.log("Loading:", loading);
  // console.log("Error:", error);

  const [userData, setUserData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error && user) setUserData(user);
  }, [loading, user, error]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/blog-post">Blogs</Link>
          </li>
        </ul>
      </nav>

      <div>
        <label htmlFor="data">Enter Data:</label>
        <input type="text" id="data" onChange={(e) => {
          console.log(e.target.value);
          if(e.target.value.length > 10)
            navigate("/blog-post");
        }} /> 
      </div>

      <UserContext.Provider value={{ ...userData, setData: setUserData }}>
        <div>{loading ? "Loading..." : <PostContainer />}</div>
      </UserContext.Provider>
      <Outlet />
    </>
  );
}
