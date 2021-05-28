import format from "date-fns/format";
import React from "react";
import Movie from "../../../models/Movie";
import { VisibleMdUp, HiddenMdUp } from "../../style/style";
import * as S from "./MovieMetadata.styles";

interface MovieMetadataProps {
  movie: Movie;
}

const MovieMetadata: React.FC<MovieMetadataProps> = ({ movie }) => {
  let formattedRuntime;

  if (movie.runtime > 0) {
    formattedRuntime =
      movie.runtime > 60
        ? `${Math.floor(movie.runtime / 60)}h${movie.runtime % 60}`
        : `${movie.runtime % 60}m`;
  }

  return (
    <div>
      <S.Container>
        {movie.releaseDate && (
          <S.Group>
            <dt>Year</dt>
            <dd>{format(movie.releaseDate, "yyyy")}</dd>
          </S.Group>
        )}

        {movie.voteAverage > 0 && (
          <>
            <HiddenMdUp>
              <S.Group>
                <dt>Rating</dt>
                <dd>{movie.voteAverage}</dd>
              </S.Group>
            </HiddenMdUp>

            <VisibleMdUp>
              <S.RatingBadge as="div">
                <S.Group>
                  <dt>Rating</dt>
                  <dd>{movie.voteAverage}</dd>
                </S.Group>
              </S.RatingBadge>
            </VisibleMdUp>
          </>
        )}

        {formattedRuntime && (
          <S.Group>
            <dt>Runtime</dt>
            <dd>{formattedRuntime}</dd>
          </S.Group>
        )}
      </S.Container>
    </div>
  );
};

export default MovieMetadata;
