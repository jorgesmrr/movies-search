import { act, render, screen, waitFor } from "@testing-library/react";
import MovieList from "./MovieList";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakeData = {
  data: [
    { id: 1, title: "Foo" },
    { id: 2, title: "Bar" },
  ],
};

describe("component renders", () => {
  beforeEach(() => {
    render(<MovieList />);
  });

  test("should show spinner", () => {
    expect(screen.getByTestId("movie-list__spinner")).toBeTruthy();
  });

  test("should start fetching movies", () => {
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});

describe("loads movies", () => {
  beforeEach(async () => {
    mockedAxios.get.mockResolvedValueOnce(fakeData);

    render(<MovieList />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });

  test("should show movies list", async () => {
    expect(
      await screen.findByRole("list", { name: "movies list" })
    ).toBeTruthy();

    expect(screen.getByRole("listitem", { name: fakeData.data[0].title }));
  });
});
