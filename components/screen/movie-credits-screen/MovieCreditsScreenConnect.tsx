import { useRequestEffect } from "@bit/jorgemoreira.headless-react.hooks";
import { getMovie, getMovieCredits } from "../../../network/resources/movie";
import MovieCreditsScreen from "./MovieCreditsScreen";

export interface MovieScreenConnectProps {
  id: number;
}

const MovieCreditsScreenConnect: React.FC<MovieScreenConnectProps> = ({
  id,
}) => {
  const movieState = useRequestEffect(getMovie(id), [id]);
  const creditsState = useRequestEffect(getMovieCredits(id), [id]);

  return (
    <MovieCreditsScreen movieState={movieState} creditsState={creditsState} />
  );
};

export default MovieCreditsScreenConnect;
