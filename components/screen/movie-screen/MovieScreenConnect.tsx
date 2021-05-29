import { useRequestEffect } from "@bit/jorgemoreira.headless-react.hooks";
import { getMovie } from "../../../network/resources/movie";
import MovieScreen from "./MovieScreen";

export interface MovieScreenConnectProps {
  id: number;
}

const MovieScreenConnect: React.FC<MovieScreenConnectProps> = ({ id }) => {
  const state = useRequestEffect(getMovie(id), [id]);

  return <MovieScreen {...state} />;
};

export default MovieScreenConnect;
