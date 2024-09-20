import { useState } from "react";
import { LoginForm } from "./Components/LoginForms";

export default function App() {
  const [toggle, setToggle] = useState(false);

  function Toggler() {
    setToggle((currentState) => !currentState);
  }

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
        <button onClick={Toggler}>Toggle</button> <hr />
        {toggle && <LoginForm />}
      </div>
    </>
  );
}
