import { getSearchMoviesFixture } from "../__fixtures__/search";

export const searchMovies = () => () => {
  return Promise.resolve(getSearchMoviesFixture);
};
