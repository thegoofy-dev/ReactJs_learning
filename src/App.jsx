import { useEffect, useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [sync, setSync] = useState(false);
    
    useEffect(()=>{
        console.log("Rendering...");
        document.title="React Tutorial";
    }, [sync]);

    function Incrementer() {
        setCounter((prevCount) => prevCount +1 );
    }

    function SyncCounter() {
        setSync((current) => !current);
    }
    return (
        <div>
            <div>You have Clicked the button {counter} times.</div>
            <button onClick={Incrementer}>Click ME {counter}</button> &emsp;
            <button onClick={SyncCounter}>Sync</button>
        </div>
    );
}
