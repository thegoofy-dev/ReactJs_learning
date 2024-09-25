import { useEffect } from "react";
import { useDocumentClick } from "../utils/hooks/useDocumentClick.";

export function LoginForm() {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log("Window/ViewPort Resized!");
    };

    window.addEventListener("resize", resizeEventHandler);

    return () => {
      console.log("Unmounting Login Form");
      console.log("Removing Resize Event Listener!");
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  useDocumentClick();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const username = formdata.get("username");
        const password = formdata.get("password");

        fetch("http://localhost:5173/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
        });
      }}
    >
      <label htmlFor="username">UserName:</label>
      <input
        id="username"
        onChange={(e) => {
          console.log("UserName:", e.target.value);
        }}
        name="username"
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={(e) => {
          console.log("Password:", e.target.value);
        }}
        name="password"
      />
      <br />
      <button>Login</button>
    </form>
  );
}
