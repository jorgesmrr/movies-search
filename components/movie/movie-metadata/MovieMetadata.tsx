import format from "date-fns/format";
import React from "react";
import Movie from "../../../models/Movie";
import * as S from "./MovieMetadata.styles";

export interface MovieMetadataProps {
  movie: Movie;
}

const MovieMetadata: React.FC<MovieMetadataProps> = ({ movie }) => {
  let formattedRuntime;

  if (movie.runtime > 0) {
    let minutes = (movie.runtime % 60).toString();
    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }

    formattedRuntime =
      movie.runtime > 60
        ? `${Math.floor(movie.runtime / 60)}h${minutes}`
        : `${minutes}m`;
  }

  return (
    <S.List>
      {movie.voteAverage > 0 && (
        <S.Item>
          <a title="Rating">
            <S.RatingValue>{movie.voteAverage}</S.RatingValue>
            <S.RatingRange> / 10</S.RatingRange>
          </a>
        </S.Item>
      )}

      {movie.releaseDate && (
        <S.Item>
          <a title="Release Year">{format(movie.releaseDate, "yyyy")}</a>
        </S.Item>
      )}

      {formattedRuntime && (
        <S.Item>
          <a title="Runtime">{formattedRuntime}</a>
        </S.Item>
      )}
    </S.List>
  );
};

export default MovieMetadata;
