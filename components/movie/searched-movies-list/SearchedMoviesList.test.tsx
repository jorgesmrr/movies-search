import { render, waitFor } from "@testing-library/react";
import * as useRequest from "../../../hooks/useRequest";
import { searchableMovies } from "../../../network/resources/__fixtures__/movie";
import SearchedMoviesList from "./SearchedMoviesList";

jest.mock("../../../network/resources/movie");

const searchText = searchableMovies[0].title;

describe("component renders", () => {
  test("should start loading movies", async () => {
    const useRequestSpy = jest.spyOn(useRequest, "default");

    render(<SearchedMoviesList search={searchText} />);
    await waitFor(() => expect(useRequestSpy).toHaveBeenCalled());
  });

  test("should show results", async () => {
    const { findByRole } = render(<SearchedMoviesList search={searchText} />);

    expect(await findByRole("listitem", { name: searchText })).toBeTruthy();
  });
});
