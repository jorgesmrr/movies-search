import ImageType from "../../../models/ImageType";
import Movie from "../../../models/Movie";
import { PosterSizes } from "../../../network/constants";
import ImagePlaceholder from "../../image/image-placeholder/ImagePlaceholder";
import TmdbImage from "../../image/tmdb-image/TmdbImage";
import { Subtitle } from "../../style/style";
import MovieMetadata from "../movie-metadata/MovieMetadata";
import * as S from "./MovieOverview.styles";

export interface MovieOverviewProps {
  movie: Movie;
}

const MovieOverview: React.FC<MovieOverviewProps> = ({ movie }) => {
  return (
    <S.RootCard shadowLevel={3}>
      <S.PosterSlot>
        <ImagePlaceholder rounded type={ImageType.Poster}>
          <TmdbImage
            title={movie.title}
            path={movie.poster}
            sizes={{ xs: PosterSizes.Big }}
          />
        </ImagePlaceholder>
      </S.PosterSlot>
      <S.HeadingSlot>
        <S.Title>{movie.title}</S.Title>
        <MovieMetadata movie={movie} />
      </S.HeadingSlot>
      <S.TextSlot>
        <hr />

        {movie.tagline && <Subtitle>{movie.tagline}</Subtitle>}
        <S.Synopsis>{movie.overview}</S.Synopsis>

        <S.BadgesList>
          {movie.isAdult && <S.ExplicitBadge>Explicit</S.ExplicitBadge>}
          {movie.genres.map((genre) => (
            <S.GenreBadge as="li" key={genre.id}>
              {genre.name}
            </S.GenreBadge>
          ))}
        </S.BadgesList>
      </S.TextSlot>
    </S.RootCard>
  );
};

export default MovieOverview;
