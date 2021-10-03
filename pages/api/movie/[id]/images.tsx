import { TMDB_API_MOVIE_IMAGES } from "../../_constants";
import { getTmdbHandler } from "../../_helpers";

export default getTmdbHandler(({ id }) => TMDB_API_MOVIE_IMAGES(id as string));
