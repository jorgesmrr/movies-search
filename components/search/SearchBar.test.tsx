import React from "react";
import SearchBar from "./SearchBar";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testing";

describe("component renders", () => {
  test("should be empty", () => {
    const { getByRole } = customRender(<SearchBar onSubmit={jest.fn()} />);

    const searchInput = getByRole("textbox");

    expect(searchInput).toHaveValue("");
  });
});

describe("user types in", () => {
  test("should call the submit function on Enter key press", () => {
    const onSubmit = jest.fn();

    const { getByRole } = customRender(<SearchBar onSubmit={onSubmit} />);

    const searchInput = getByRole("textbox");

    userEvent.type(searchInput, "{enter}");
    expect(onSubmit).toHaveBeenCalled();
  });

  test("should call the submit function with the typed text", () => {
    const onSubmit = jest.fn();

    const { getByRole } = customRender(<SearchBar onSubmit={onSubmit} />);

    const searchInput = getByRole("textbox");

    const searchText = "Some movie name here";
    userEvent.type(searchInput, `${searchText}{enter}`);
    expect(onSubmit).toHaveBeenCalledWith(searchText);
  });

  test("should be empty after 'clear' button click", () => {
    const { getByRole, getByTestId } = customRender(
      <SearchBar onSubmit={jest.fn()} />
    );

    const searchInput = getByRole("textbox");
    const clearButton = getByTestId("search-bar__clear");

    const searchText = "Some movie name here";
    userEvent.type(searchInput, searchText);
    fireEvent.click(clearButton);

    expect(searchInput).toHaveValue("");
  });
});
