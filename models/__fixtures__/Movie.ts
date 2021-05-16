import { getMovieFixture } from "../../network/resources/__fixtures__/movie";
import { movieTransformer } from "../../network/transformers";
import Movie from "../Movie";

const getFakeMovie: () => Movie = () => movieTransformer(getMovieFixture());

export const fakeMovie: Movie = getFakeMovie();

export const fakeMovies: Movie[] = [...new Array(9)].map(getFakeMovie);
