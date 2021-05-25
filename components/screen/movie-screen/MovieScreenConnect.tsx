import useRequest from "../../../hooks/useRequest";
import { getMovie } from "../../../network/resources/movie";
import MovieScreen from "./MovieScreen";

export interface MovieScreenConnectProps {
  id: number;
}

const MovieScreenConnect: React.FC<MovieScreenConnectProps> = ({ id }) => {
  const state = useRequest(getMovie(id), [id]);

  return <MovieScreen {...state} />;
};

export default MovieScreenConnect;
