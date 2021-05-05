import React, { useEffect } from "react";
import axios from "axios";
import useRequest from "./useRequest";
import { render, waitFor } from "@testing-library/react";
import movies from "../fixtures/movies";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue({ data: movies });

const fakeUrl = "foo";

const FakeComponent = ({ watcher }) => {
  const useRequestState = useRequest(fakeUrl);

  useEffect(() => watcher(useRequestState), [useRequestState]);

  return <div />;
};

test("should fetch correct url", async () => {
  const stateWatcher = jest.fn();

  render(<FakeComponent watcher={stateWatcher} />);
  await waitFor(() => expect(stateWatcher).toHaveBeenCalledTimes(4));

  expect(axios.get).toBeCalledWith(fakeUrl);
});

test("should correectly update state", async () => {
  const stateWatcher = jest.fn();

  render(<FakeComponent watcher={stateWatcher} />);
  await waitFor(() => expect(stateWatcher).toHaveBeenCalledTimes(4));

  expect(stateWatcher).toHaveBeenNthCalledWith(1, {
    loading: false,
    error: false,
    data: undefined,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(2, {
    loading: true,
    error: false,
    data: undefined,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(3, {
    loading: true,
    error: false,
    data: movies,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(4, {
    loading: false,
    error: false,
    data: movies,
  });
});
