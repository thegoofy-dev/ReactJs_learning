import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function BlogPostPages() {
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);
  console.log(window.history.state);

  useEffect(() => {
    console.log(state);
    if (state && state.posts) {
      setPosts(state.posts);
    }
  }, [state]);

  return (
    <>
      <div>
        <h1>Welcome to BlogPosts Page</h1>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>Title:{post.title}</h3>
          <h3>Content:{post.content}</h3>
        </div>
      ))}
    </>
  );
}
