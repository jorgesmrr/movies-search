import { TMDB_API_MOVIES_NOW_PLAYING } from "../_constants";
import { getTmdbHandler } from "../_helpers";

export default getTmdbHandler(() => TMDB_API_MOVIES_NOW_PLAYING);
