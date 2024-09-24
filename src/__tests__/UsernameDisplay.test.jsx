import { describe, it, expect } from "vitest"; 
import { render } from "@testing-library/react";
import { UsernameDisplay } from "../Components/UsernameDisplay";

describe("UserName Display", () => {
    it("should render username", () => {
        const result = render(<UsernameDisplay username={"Tillu"} />);
        expect(result.container).toMatchSnapshot();
    });
})