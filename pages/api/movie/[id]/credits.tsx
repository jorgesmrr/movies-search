import { TMDB_API_CREDITS } from "../../_constants";
import { getTmdbHandler } from "../../_helpers";

export default getTmdbHandler(({ id }) => TMDB_API_CREDITS(id as string));
