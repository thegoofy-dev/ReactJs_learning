import { PostContainer } from "./Components/POST/PostContainer";
import { UserContext } from "./utils/contexts/UserContext"

export default function App() {
  return (
    <>
      <h2>
        Hola! This is our React Tutorial by
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#8212;
        Anson The Developer.
      </h2>
      <hr />
      <div>
        <PostContainer />
      </div>
    </>
  );
}
