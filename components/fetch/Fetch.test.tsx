import { waitFor } from "@testing-library/react";
import * as useRequest from "../../hooks/useRequest";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import { getTrendingMovies } from "../../network/resources/movie";
import { customRender } from "../../utils/testing";
import Fetch from "./Fetch";

jest.mock("../../network/resources/movie");

describe("component renders", () => {
  test("should start fetching", async () => {
    const useRequestSpy = jest.spyOn(useRequest, "default");

    customRender(
      <Fetch
        endpoint={getTrendingMovies(TrendingTimeWindow.Day)}
        dependencies={[]}
        render={() => <div />}
      />
    );
    await waitFor(() => expect(useRequestSpy).toHaveBeenCalled());
  });
});
