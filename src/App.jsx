import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log("Rendering...");
    document.title = "React Tutorial";
  }, [sync]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users", {
  //       method: "GET",
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log("Invalid Endpoint :",err);
  //       });
  //   });

  useEffect(() => {
    // Abort Class instance
    const controller = new AbortController();
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("Some Error in Fetching :", error);
      }
    }
    fetchUsers();
    // Abort CleanUp function
    return ()=> {
        controller.abort();
        console.log(controller.signal);
    }
  });

  function Incrementer() {
    setCounter((prevCount) => prevCount + 1);
  }

  function SyncCounter() {
    setSync((current) => !current);
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
        <div>You have Clicked the button {counter} times.</div>
        <button onClick={Incrementer}>Click ME {counter}</button> &emsp;
        <button onClick={SyncCounter}>Sync</button>
      </div>
    </>
  );
}
