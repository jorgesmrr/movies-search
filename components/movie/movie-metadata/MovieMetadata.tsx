import format from "date-fns/format";
import React from "react";
import styled from "styled-components";
import Movie from "../../../models/Movie";
import { Badge, ForLargeScreens, ForSmallScreens } from "../../style/style";

const Container = styled.dl`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.color.neutral.darker};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.darker};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    text-align: center;
    padding: 0;
    border: none;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column-reverse;
  font-size: ${({ theme }) => theme.fontSize.mobile[1]}rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.desktop[2]}rem;
  }

  dt {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.neutral.light};
    font-size: ${({ theme }) => theme.fontSize.mobile[0]}rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSize.desktop[1]}rem;
    }
  }

  dd {
    font-weight: 600;
  }
`;

const RatingBadge = styled(Badge)`
  padding: 1rem;
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
          <>
            <ForSmallScreens>
              <Group>
                <dt>Rating</dt>
                <dd>{movie.voteAverage}</dd>
              </Group>
            </ForSmallScreens>

            <ForLargeScreens>
              <RatingBadge as="div">
                <Group>
                  <dt>Rating</dt>
                  <dd>{movie.voteAverage}</dd>
                </Group>
              </RatingBadge>
            </ForLargeScreens>
          </>
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
