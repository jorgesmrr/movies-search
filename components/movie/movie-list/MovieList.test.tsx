import { render, screen } from "@testing-library/react";
import MovieList from "./MovieList";
import axios from "axios";

describe("component renders", () => {
  beforeEach(() => render(<MovieList />));

  test("should show spinner", () => {
    expect(screen.getByTestId("movie-list__spinner")).toBeTruthy();
  });

  test("should start fetching movies", () => {
    expect(axios.get).toHaveBeenCalled();
  });

  test("should show movies list", () => {
    expect(screen.findByTestId("movie-list__movies")).toBeTruthy();
  });
});
