import { createContext } from "react";

export const UserContext = createContext({
    id:0, 
    username: "Guest",
    email: "default@gmail.com",
    user: "Welcome Guest",
    setData : () => {}
});