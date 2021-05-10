import parse from "date-fns/parse";
import faker from "faker";
import Movie from "../Movie";

const getFakeMovie: () => Movie = () => ({
  id: 550,
  title: "Fight Club",

  poster: faker.lorem.words(2),
  backdrop: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",

  isAdult: true,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
  ],
  language: "en",
  releaseDate: parse("1999-10-12", "yyyy-MM-dd", new Date()),
  runtime: 139,
  voteAverage: 7.8,

  tagline:
    "How much can you know about yourself if you've never been in a fight?",
  overview:
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',

  imdbId: "tt0137523",
});

export const fakeMovie: Movie = getFakeMovie();

export const fakeMovies: Movie[] = [fakeMovie];
