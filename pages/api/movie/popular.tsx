import { TMDB_API_MOVIES_POPULAR } from "../_constants";
import { getTmdbHandler } from "../_helpers";

export default getTmdbHandler(
  ({ page }) => `${TMDB_API_MOVIES_POPULAR}?page=${page}`
);
