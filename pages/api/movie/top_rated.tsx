import { TMDB_API_MOVIES_TOP_RATED } from "../_constants";
import { getTmdbHandler } from "../_helpers";

export default getTmdbHandler(
  ({ page }) => `${TMDB_API_MOVIES_TOP_RATED}?page=${page}`
);
