import { describe, it } from "vitest"; 
import { render } from "@testing-library/react";
import { UsernameDisplay } from "../Components/UsernameDisplay";

describe("UserName Display", () => {
    it("should render username", () => {
        render(<UsernameDisplay />);

    });
})