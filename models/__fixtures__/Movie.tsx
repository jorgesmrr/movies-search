import faker from "faker";
import Movie from "../Movie";
import { fakeGenre } from "./Genre";

const getFakeMovie: () => Movie = () => ({
  id: faker.datatype.number(),
  title: faker.lorem.words(2),

  poster: faker.lorem.words(2),
  backdrop: faker.lorem.words(2),

  isAdult: faker.datatype.boolean(),
  genres: [fakeGenre],
  language: faker.lorem.words(2),
  releaseDate: faker.date.recent(),
  runtime: faker.datatype.number(),

  tagline: faker.lorem.words(2),
  overview: faker.lorem.words(2),

  imdbId: faker.datatype.number(),
});

export const fakeMovie: Movie = getFakeMovie();

export const fakeMovies: Movie[] = [...new Array(10)].map(getFakeMovie);
