import { TMDB_API_TRENDING_MOVIES } from "../../_constants";
import { getTmdbHandler } from "../../_helpers";

export default getTmdbHandler(
  ({ page }) => `${TMDB_API_TRENDING_MOVIES}/day?page=${page}`
);
