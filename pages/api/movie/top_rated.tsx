import { TMDB_API_MOVIES_TOP_RATED } from "../_constants";
import { getTmdbHandler } from "../_helpers";

export default getTmdbHandler(() => TMDB_API_MOVIES_TOP_RATED);
