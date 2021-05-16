import Genre from "./Genre";

export default interface Movie {
  id: number;
  title: string;

  poster: string;
  backdrop: string;

  isAdult: boolean;
  genres: Genre[];
  language: string;
  releaseDate?: Date;
  runtime?: number;
  voteAverage?: number;

  tagline: string;
  overview: string;
}
