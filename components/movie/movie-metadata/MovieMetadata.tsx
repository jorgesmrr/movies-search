import format from "date-fns/format";
import React from "react";
import styled from "styled-components";
import Movie from "../../../models/Movie";
import { Badge, textSize } from "../../style/style";

const Container = styled.dl`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
  margin: 1.25rem 0;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column-reverse;
  ${({ theme }) => textSize(theme, 3)}

  dt {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.neutral.light};
    ${({ theme }) => textSize(theme, 1)}
  }

  dd {
    font-weight: 600;
  }
`;

const RatingBadge = styled(Badge)`
  ${({ theme }) => textSize(theme, 3)}
`;

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
      <Container>
        {movie.releaseDate && (
          <Group>
            <dt>Year</dt>
            <dd>{format(movie.releaseDate, "yyyy")}</dd>
          </Group>
        )}

        {movie.voteAverage > 0 && (
          <RatingBadge as="div">
            <Group>
              <dt>Rating</dt>
              <dd>{movie.voteAverage}</dd>
            </Group>
          </RatingBadge>
        )}

        {formattedRuntime && (
          <Group>
            <dt>Runtime</dt>
            <dd>{formattedRuntime}</dd>
          </Group>
        )}
      </Container>
    </div>
  );
};

export default MovieMetadata;
