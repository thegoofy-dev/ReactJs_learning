import { useEffect, useState } from "react" 
import PropTypes from "prop-types";

export function UsernameDisplay({ username }) {
    const [timerPassed, setTimerPassed] = useState(false);

    useEffect(() => {
        setTimeout(() =>{
            setTimerPassed(true);
        }, 2000);
    })

  return (
    <div>
      <span>{timerPassed && username}</span>
    </div>
  );
}

UsernameDisplay.propTypes = {
    username: PropTypes.string.isRequired
}