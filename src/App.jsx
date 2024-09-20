import { useEffect, useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);
    
    useEffect(()=>{
        console.log("Rendering...");
        document.title="React Tutorial " + counter;
    })

    function Incrementer() {
        setCounter((prevCount) => prevCount +1 );
    }
    return (
        <div>
            <h3>You have Clicked the button {counter} times.</h3>
            <button onClick={Incrementer}>Click ME {counter}</button>
        </div>
    );
}
