import { useRequestEffect } from "@bit/jorgemoreira.headless-react.hooks";
import { getMovieCredits } from "../../../network/resources/movie";
import MovieCreditsScreen from "./MovieCreditsScreen";

export interface MovieScreenConnectProps {
  id: number;
}

const MovieCreditsScreenConnect: React.FC<MovieScreenConnectProps> = ({
  id,
}) => {
  const state = useRequestEffect(getMovieCredits(id), [id]);

  return <MovieCreditsScreen {...state} />;
};

export default MovieCreditsScreenConnect;
