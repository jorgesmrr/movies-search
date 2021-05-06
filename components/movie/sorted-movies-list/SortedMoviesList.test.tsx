import { render, waitFor } from "@testing-library/react";
import * as useRequest from "../../../hooks/useRequest";
import MovieSort from "../../../models/MovieSort";
import SortedMoviesList from "./SortedMoviesList";

jest.mock("../../../network/resources/movie");

describe("component renders", () => {
  test("should start loading movies", async () => {
    const useRequestSpy = jest.spyOn(useRequest, "default");

    render(<SortedMoviesList sort={MovieSort.Popular} />);
    await waitFor(() => expect(useRequestSpy).toHaveBeenCalled());
  });
});
