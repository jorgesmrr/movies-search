import MovieSort from "../../../models/MovieSort";
import {
  newMovies,
  popularMovies,
  searchableMovies,
} from "../__fixtures__/movie";

export const getMovies = (sort: MovieSort) => () => {
  const sortMap = {
    [MovieSort.Popular]: popularMovies,
    [MovieSort.New]: newMovies,
  };

  return Promise.resolve({ data: sortMap[sort] });
};

export const getMovie = (id: number) => () =>
  Promise.resolve({ data: searchableMovies.find((movie) => movie.id === id) });

export const searchMovies = (search: string) => () => {
  return Promise.resolve({ data: searchableMovies });
};
