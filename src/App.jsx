import { useState } from "react";

export default function App() {
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    content: "",
  });

  function titleChange(e) {
    setBlogPostData((currentBlogPostData) => ({
      ...currentBlogPostData,
      title: e.target.value,
    }));
  }

  function contentChange(e) {
    setBlogPostData((currentBlogPostData) => ({
      ...currentBlogPostData,
      content: e.target.value,
    }));
  }

  function formSubmit(e) {
    e.preventDefault();
    if (blogPostData.title && blogPostData.content)
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: {
          userId: 1,
          title: blogPostData.title,
          content: blogPostData.content,
        },
        headers: {
          "Content-type": "application/josn; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success!");
          console.log(data);
        })
        .catch((err) => console.log("Error while Fetching :", err));
  }

  console.log(blogPostData);

  return (
    <>
      <h2>
        Hola! This is our React Tutorial by
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#8212;
        Anson The Developer.
      </h2>
      <hr />
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            value={blogPostData.title}
            onChange={titleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content : </label>
          <input
            type="text"
            id="content"
            value={blogPostData.content}
            onChange={contentChange}
          />
        </div>
        <button>Create Post</button>
      </form>
    </>
  );
}
