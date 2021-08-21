import { TMDB_API_RECOMMENDED_MOVIES } from "../../_constants";
import { getTmdbHandler } from "../../_helpers";

export default getTmdbHandler(({ id }) =>
  TMDB_API_RECOMMENDED_MOVIES(id as string)
);
