import Movie from "../../../models/Movie";

export const dayTrendingMovies: Movie[] = [
  { id: 1, title: "Arrival" },
  { id: 2, title: "Zodiac" },
];

export const weekTrendingMovies: Movie[] = [
  { id: 3, title: "Black Widow" },
  { id: 4, title: "Soul" },
];

export const searchableMovies: Movie[] = [
  { id: 5, title: "Fight Club" },
  { id: 6, title: "The Dark Knight" },
];

export const allMovies = [
  ...weekTrendingMovies,
  ...dayTrendingMovies,
  ...searchableMovies,
];