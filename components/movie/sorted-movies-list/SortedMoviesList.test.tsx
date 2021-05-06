import { render, waitFor } from "@testing-library/react";
import * as useRequest from "../../../hooks/useRequest";
import SortedMoviesList, { MovieSortBy } from "./SortedMoviesList";

jest.mock("../../../network/resources/movie");

describe("component renders", () => {
  test("should start loading movies", async () => {
    const useRequestSpy = jest.spyOn(useRequest, "default");

    render(<SortedMoviesList sort={MovieSortBy.Popular} />);
    await waitFor(() => expect(useRequestSpy).toHaveBeenCalled());
  });
});
