import { TMDB_API_TRENDING_MOVIES } from "../../_constants";
import { getTmdbHandler } from "../../_helpers";

export default getTmdbHandler(() => `${TMDB_API_TRENDING_MOVIES}/day`);
