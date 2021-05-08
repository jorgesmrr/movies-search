import { waitFor } from "@testing-library/react";
import * as useRequest from "../../../hooks/useRequest";
import TrendingTimeWindow from "../../../models/TrendingTimeWindow";
import { customRender } from "../../../utils/testing";
import TrendingMoviesList from "./TrendingMoviesList";

jest.mock("../../../network/resources/movie");

describe("component renders", () => {
  test("should start loading movies", async () => {
    const useRequestSpy = jest.spyOn(useRequest, "default");

    customRender(<TrendingMoviesList timeWindow={TrendingTimeWindow.Day} />);
    await waitFor(() => expect(useRequestSpy).toHaveBeenCalled());
  });
});
