import { render, waitFor } from "@testing-library/react";
import * as useRequest from "../../../hooks/useRequest";
import SearchedMoviesList from "./SearchedMoviesList";

jest.mock("../../../network/resources/movie");

describe("component renders", () => {
  test("should start loading movies", async () => {
    const useRequestSpy = jest.spyOn(useRequest, "default");

    render(<SearchedMoviesList search="foo" />);
    await waitFor(() => expect(useRequestSpy).toHaveBeenCalled());
  });

  test("should show results", async () => {
    const { findAllByRole } = render(<SearchedMoviesList search="foo" />);

    expect((await findAllByRole("listitem")).length).toBeTruthy();
  });
});
