import { getMovieFixture } from "../../network/resources/__fixtures__/movie";
import { getSearchMoviesFixture } from "../../network/resources/__fixtures__/search";
import { getTrendingMoviesFixture } from "../../network/resources/__fixtures__/trending";

const mockedMovie = getMovieFixture();
const mockedTrendingMovies = getTrendingMoviesFixture();
const mockedSearchResults = getSearchMoviesFixture();

describe("Navigation flows", () => {
  it("should navigate the slide and open a movie", () => {
    cy.visit("/");

    cy.findByRole("region", { name: "Trending Today" })
      .findByRole("button", { name: "next movies" })
      .click();

    cy.findByText(mockedTrendingMovies.results[0].title).click();

    cy.findByRole("heading", { name: mockedMovie.title });
  });

  it("should type in search bar and open a movie", () => {
    cy.visit("/");

    cy.findByRole("textbox", { name: "search bar input" }).type("Foo{enter}");

    cy.url().should("eq", "http://localhost:3000/search?q=Foo");

    cy.findAllByText(mockedSearchResults.results[0].title).first().click();

    cy.findByRole("heading", { name: mockedMovie.title });
  });
});
