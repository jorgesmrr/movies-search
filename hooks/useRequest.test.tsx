import React, { useEffect } from "react";
import axios from "axios";
import useRequest from "./useRequest";
import { render, waitFor } from "@testing-library/react";
import movies from "../fixtures/movies";
import { getMovies } from "../network/resources/movie";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue({ data: movies });

const fakeUrl = "foo";

const FakeComponent = ({ watcher }) => {
  const useRequestState = useRequest(getMovies());

  useEffect(() => watcher(useRequestState), [useRequestState]);

  return <div />;
};

test("should correectly update state", async () => {
  const stateWatcher = jest.fn();

  render(<FakeComponent watcher={stateWatcher} />);
  await waitFor(() => expect(stateWatcher).toHaveBeenCalledTimes(4));

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
    data: movies,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(4, {
    isLoading: false,
    error: false,
    data: movies,
  });
});
