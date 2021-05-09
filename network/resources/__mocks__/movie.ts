import { getMovieFixture } from "../__fixtures__/movie";

export const getMovie = () => () => Promise.resolve(getMovieFixture);
