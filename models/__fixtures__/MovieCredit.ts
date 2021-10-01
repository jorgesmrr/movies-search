import { getMovieCreditsFixture } from "../../network/resources/__fixtures__/movie";
import { movieCreditsTransformer } from "../../network/transformers";
import MovieCredits from "../MovieCredits";

export const fakeMovieCredits: MovieCredits = movieCreditsTransformer(
  getMovieCreditsFixture()
);
