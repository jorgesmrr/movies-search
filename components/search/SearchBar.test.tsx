import React from "react";
import SearchBar from "./SearchBar";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("component renders", () => {
  test("should be empty", () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId("search-bar__input");

    expect(searchInput.textContent).toBe("");
  });
});

describe("user types in", () => {
  test("should call the submit function on Enter key press", () => {
    const onSubmit = jest.fn();

    render(<SearchBar onSubmit={onSubmit} />);

    const searchInput = screen.getByTestId("search-bar__input");

    userEvent.type(searchInput, "{enter}");
    expect(onSubmit).toHaveBeenCalled();
  });

  test("should call the submit function with the typed text", () => {
    const onSubmit = jest.fn();

    render(<SearchBar onSubmit={onSubmit} />);

    const searchInput = screen.getByTestId("search-bar__input");

    const searchText = "Some movie name here";
    userEvent.type(searchInput, `${searchText}{enter}`);
    expect(onSubmit).toHaveBeenCalledWith(searchText);
  });

  test("should be empty after 'clear' button click", () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId("search-bar__input");
    const clearButton = screen.getByTestId("search-bar__clear");

    const searchText = "Some movie name here";
    userEvent.type(searchInput, searchText);
    fireEvent.click(clearButton);

    expect(searchInput.textContent).toBe("");
  });
});
