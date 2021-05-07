import React, { useEffect } from "react";
import useRequest from "./useRequest";
import { render, waitFor } from "@testing-library/react";
import { dayTrendingMovies } from "../network/resources/__fixtures__/movie";
import { getTrendingMovies } from "../network/resources/movie";
import TrendingTimeWindow from "../models/TrendingTimeWindow";
import { mockResponsePage } from "../utils/testing";

jest.mock("../network/resources/movie");

const FakeComponent = ({ watcher }) => {
  const useRequestState = useRequest(getTrendingMovies(TrendingTimeWindow.Day));

  useEffect(() => watcher(useRequestState), [useRequestState]);

  return <div />;
};

test("should correctly update state", async () => {
  const stateWatcher = jest.fn();

  render(<FakeComponent watcher={stateWatcher} />);
  await waitFor(() => expect(stateWatcher).toHaveBeenCalledTimes(4));

  const data = mockResponsePage(dayTrendingMovies);

  expect(stateWatcher).toHaveBeenNthCalledWith(1, {
    isLoading: false,
    error: false,
    data: undefined,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(2, {
    isLoading: true,
    error: false,
    data: undefined,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(3, {
    isLoading: true,
    error: false,
    data,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(4, {
    isLoading: false,
    error: false,
    data,
  });
});
