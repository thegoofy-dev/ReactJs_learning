import { PostContainer } from "./Components/POST/PostContainer";
import { PostContentButton } from "./Components/POST/PostContentButton";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {
  return (
    <>
      <UserContext.Provider
        value={{
          id: 1,
          username: "Qayzer Gaming",
          email: "tillu@gmail.com",
          displayName: "Tillu Galoch",
        }}
      >
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
      <PostContentButton />
    </>
  );
}
