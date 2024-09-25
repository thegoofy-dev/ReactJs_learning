import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsernameDisplay } from "../Components/UsernameDisplay";

describe("UsernameDisplay", () => {
  it("should render username", async () => {
    render(<UsernameDisplay username={"Tillu"} />);
    expect(
      await screen.findByText("Tillu", {}, { timeout: 8000 })
    ).toBeInTheDocument();
  });
});

// Types of Queries

//     Single Elements
//      -> getBy... : Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found (use getAllBy instead if more than one element is expected).
//      -> queryBy... : Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use queryAllBy instead if this is OK).
//      -> findBy... : Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element, use findAllBy.

//     Multiple Elements
//      -> getAllBy... : Returns an array of all matching nodes for a query, and throws an error if no elements match.
//      -> queryAllBy... : Returns an array of all matching nodes for a query, and return an empty array ([]) if no elements match.
//      -> findAllBy... : Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 1000ms.
//             findBy methods are a combination of getBy* queries and waitFor. They accept the waitFor options as the last argument (i.e. await screen.findByText('text', queryOptions, waitForOptions))
