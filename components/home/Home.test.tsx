import { render, waitFor } from "@testing-library/react";
import Home from "./Home";

jest.mock("../../network/resources/movie");

describe("component renders", () => {
  test("should show search and movies", async () => {
    const { getByRole } = render(<Home />);

    expect(getByRole("textbox", { name: "search bar input" }));

    await waitFor(() =>
      expect(getByRole("list", { name: "movies list" })).toBeTruthy()
    );
  });
});
