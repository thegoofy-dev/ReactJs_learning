import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TestInputField } from "../Components/TestInputField";

describe("Testing Other Queries on Input Field", () => {
  it("should find input by placeholder value", () => {
    render(<TestInputField />);
    expect(screen.getByPlaceholderText(/Enter data/)).toBeInTheDocument();
  });

  it("should find input by display value", () => {
    render(<TestInputField />);
    expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
  });
});
