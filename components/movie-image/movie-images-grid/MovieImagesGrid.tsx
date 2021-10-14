import ImageType from "../../../models/ImageType";
import { MovieImage } from "../../../models/MovieImages";
import {
  BackdropSizes,
  LogoSizes,
  PosterSizes,
} from "../../../network/constants";
import { getMovieImageDescription } from "../../../network/helpers";
import ImagesList from "../../image/images-list/ImagesList";

export interface MovieImagesGridProps {
  isLoading: boolean;
  images?: MovieImage[];
  error: boolean;
  type: ImageType;
  movieId: number;
  movieTitle: string;
}

const sizesMap = {
  [ImageType.Backdrop]: {
    xs: BackdropSizes.Big,
    md: BackdropSizes.Regular,
  },
  [ImageType.Poster]: {
    xs: PosterSizes.Big,
    md: PosterSizes.Medium,
    lg: PosterSizes.Regular,
  },
  [ImageType.Logo]: {
    xs: LogoSizes.Big,
    md: LogoSizes.Medium,
    lg: LogoSizes.Regular,
  },
};

const MovieImagesGrid: React.FC<MovieImagesGridProps> = ({
  isLoading,
  images,
  error,
  type,
  movieId,
  movieTitle,
}) => (
  <ImagesList
    isLoading={isLoading}
    error={error}
    images={images?.map(getMovieImageDescription(movieId, movieTitle, type))}
    count={images ? images.length : 20}
    imageType={type}
    sizes={sizesMap[type]}
  >
    <ImagesList.Grid columns={4} />
  </ImagesList>
);
export default MovieImagesGrid;
