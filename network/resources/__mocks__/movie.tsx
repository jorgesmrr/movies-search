import movies from "../__fixtures__/movie";

export const getMovies = () => () => Promise.resolve({ data: movies });

export const getMovie = (id: number) => () =>
  Promise.resolve({ data: movies.find((movie) => movie.id === id) });
