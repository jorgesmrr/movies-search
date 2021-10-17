import { TMDB_API_MOVIE_RECOMMENDED } from "../../_constants";
import { getTmdbHandler } from "../../_helpers";

export default getTmdbHandler(({ id }) =>
  TMDB_API_MOVIE_RECOMMENDED(id as string)
);
