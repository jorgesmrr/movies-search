import React from "react";
import SearchBar from "./SearchBar";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("component renders", () => {
  test("should be empty", () => {
    const { getByRole } = render(<SearchBar />);

    const searchInput = getByRole("textbox");

    expect(searchInput.textContent).toBe("");
  });
});

describe("user types in", () => {
  test("should call the submit function on Enter key press", () => {
    const onSubmit = jest.fn();

    const { getByRole } = render(<SearchBar onSubmit={onSubmit} />);

    const searchInput = getByRole("textbox");

    userEvent.type(searchInput, "{enter}");
    expect(onSubmit).toHaveBeenCalled();
  });

  test("should call the submit function with the typed text", () => {
    const onSubmit = jest.fn();

    const { getByRole } = render(<SearchBar onSubmit={onSubmit} />);

    const searchInput = getByRole("textbox");

    const searchText = "Some movie name here";
    userEvent.type(searchInput, `${searchText}{enter}`);
    expect(onSubmit).toHaveBeenCalledWith(searchText);
  });

  test("should be empty after 'clear' button click", () => {
    const { getByRole, getByTestId } = render(<SearchBar />);

    const searchInput = getByRole("textbox");
    const clearButton = getByTestId("search-bar__clear");

    const searchText = "Some movie name here";
    userEvent.type(searchInput, searchText);
    fireEvent.click(clearButton);

    expect(searchInput.textContent).toBe("");
  });
});
