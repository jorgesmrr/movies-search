import { TMDB_API_SEARCH_MOVIES } from "../_constants";
import { getTmdbHandler } from "../_helpers";

export default getTmdbHandler(
  ({ query }) => `${TMDB_API_SEARCH_MOVIES}?query=${query}`
);
