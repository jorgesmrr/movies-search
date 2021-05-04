import React from "react";
import SearchBar from "./SearchBar";
import { render, screen } from "@testing-library/react";

type A = number;

describe("component renders", () => {
  test("should be empty", () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId("search-input");

    expect(searchInput.textContent).toBe("");
  });
});
