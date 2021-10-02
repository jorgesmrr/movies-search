import Movie from "../../../models/Movie";
import ImageType from "../../../models/ImageType";
import PagedResponse from "../../../models/PagedResponse";
import { BackdropSizes, PosterSizes } from "../../../network/constants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import Fetch from "@bit/jorgemoreira.headless-react.network.fetch";
import {
  getMovieBackdropDescription,
  getMoviePosterDescription,
} from "../../../network/helpers";
import ImagesSection from "../../image/images-section/ImagesSection";

export interface MoviesSectionProps {
  title: string;
  endpoint: RequestEndpoint<PagedResponse<Movie>>;
  imageType: ImageType;
  linkHref?: string;
  linkLabel?: string;
}

const MoviesSection: React.FC<MoviesSectionProps> = ({
  title,
  endpoint,
  imageType,
  linkHref,
  linkLabel,
}) => {
  const sizes =
    imageType === ImageType.Backdrop
      ? { xs: BackdropSizes.Big, sm: BackdropSizes.Regular }
      : {
          xs: PosterSizes.Big,
          md: PosterSizes.Medium,
          lg: PosterSizes.Regular,
        };

  const rowCount =
    imageType === ImageType.Backdrop
      ? { xs: 1, sm: 2, md: 3 }
      : { xs: 2, sm: 3, md: 6 };

  const count =
    imageType === ImageType.Backdrop ? rowCount.md * 3 : rowCount.md * 2;

  const imageDescriptor =
    imageType === ImageType.Backdrop
      ? getMovieBackdropDescription
      : getMoviePosterDescription;

  return (
    <Fetch
      endpoint={endpoint}
      render={({ data, isLoading, error }) => (
        <ImagesSection
          title={title}
          images={data?.results.map(imageDescriptor)}
          imageType={imageType}
          isLoading={isLoading}
          error={error}
          sizes={sizes}
          rowCount={rowCount}
          count={count}
          linkHref={linkHref}
          linkLabel={linkLabel}
        />
      )}
    />
  );
};

export default MoviesSection;
