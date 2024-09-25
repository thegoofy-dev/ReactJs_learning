import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { PostContainer } from "../Components/POST/PostContainer";
import { UserContext } from "../utils/contexts/UserContext";

describe("Display Context values", () => {
  const mockUserContextData = {
    id: 101,
    username: "testUser",
    email: "testEmail",
    user: "test",
    setData: () => {},
  };

  it("should match the snapshot", () => {
    const container = render(
      <UserContext.Provider value={mockUserContextData}>
        <PostContainer />
      </UserContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should display username", () => {
    render(
      <UserContext.Provider value={mockUserContextData}>
        <PostContainer />
      </UserContext.Provider>
    );

    const elements = screen.getAllByText("UserName: testUser");
    expect(elements.length).toBeGreaterThan(0);
    elements.forEach((element) => expect(element).toBeInTheDocument());
  });
});
