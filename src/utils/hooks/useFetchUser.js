import { useEffect, useState } from "react";

const userApiURL = "https://jsonplaceholder.typicode.com/users";

export function useFetchUser(userId) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(`${userApiURL}/${userId}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setError(undefined);
      })
      .catch((err) => {
        console.error("Error in FetchUser Hook:", err);
        setError(err);
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );

    return () => {
      setLoading(false);
      controller.abort();
    };
  }, [userId]);

  return { user: userData, loading, error };
}
