import { describe, it, expect } from "vitest"; 
import { render, screen } from "@testing-library/react";
import { UsernameDisplay } from "../Components/UsernameDisplay";

describe("UserName Display", () => {
    it("should render username", () => {
        render(<UsernameDisplay username={"Tillu"} />);
        // expect(screen.getByText(/llu/)).toBeInTheDocument();
        // expect(screen.getByText("Tillu")).toBeInTheDocument();
        const elements = screen.getAllByText("Tillu");
        elements.forEach((element) => { expect(element).toBeInTheDocument() });
    });
})