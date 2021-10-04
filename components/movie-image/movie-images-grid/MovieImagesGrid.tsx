import ImageType from "../../../models/ImageType";
import MovieImages from "../../../models/MovieImages";
import { BackdropSizes, PosterSizes } from "../../../network/constants";
import { getMovieImageDescription } from "../../../network/helpers";
import ImagesList from "../../image/images-list/ImagesList";
import MovieLogosList from "../movie-logos-list/MovieLogosList";

export interface MovieImagesGridProps {
  isLoading: boolean;
  images?: MovieImages;
  error: boolean;
  type: ImageType;
  movieTitle: string;
}

const posterSizes = {
  xs: PosterSizes.Big,
  md: PosterSizes.Medium,
  lg: PosterSizes.Regular,
};

const backdropsSizes = {
  xs: BackdropSizes.Big,
  md: BackdropSizes.Regular,
};

const MovieImagesGrid = ({ isLoading, images, error, type, movieTitle }) => {
  switch (type) {
    case ImageType.Backdrop:
      return (
        <ImagesList
          isLoading={isLoading}
          error={error}
          images={images?.backdrops.map(getMovieImageDescription(movieTitle))}
          count={images ? images.backdrops.length : 20}
          imageType={ImageType.Backdrop}
          sizes={backdropsSizes}
        >
          <ImagesList.Grid columns={4} />
        </ImagesList>
      );
    case ImageType.Poster:
      return (
        <ImagesList
          isLoading={isLoading}
          error={error}
          images={images?.posters.map(getMovieImageDescription(movieTitle))}
          count={images ? images.posters.length : 20}
          imageType={ImageType.Poster}
          sizes={posterSizes}
        >
          <ImagesList.Grid columns={5} />
        </ImagesList>
      );
    case ImageType.Logo:
      return <MovieLogosList images={images?.logos} />;
  }

  return null;
};

export default MovieImagesGrid;
