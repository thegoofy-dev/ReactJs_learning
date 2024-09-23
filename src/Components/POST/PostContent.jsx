import { useContext } from "react";
import {PostContentButton} from "./PostContentButton";
import { UserContext } from "../../utils/contexts/UserContext";

export function PostContent() {
    const userContextData = useContext(UserContext);

    return (
        <div>
            <hr />
            <h4>Post Content</h4>
            <PostContentButton />
            <span>Email: {userContextData.email}</span>
        </div>
    )
}