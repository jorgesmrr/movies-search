import { TMDB_API_MOVIES_UPCOMING } from "../_constants";
import { getTmdbHandler } from "../_helpers";

export default getTmdbHandler(
  ({ page }) => `${TMDB_API_MOVIES_UPCOMING}?page=${page}`
);
