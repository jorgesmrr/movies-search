import Fetch from "@bit/jorgemoreira.headless-react.network.fetch";
import ImageType from "../../../models/ImageType";
import { BackdropSizes } from "../../../network/constants";
import { getMovieImageDescription } from "../../../network/helpers";
import { getMovieImages } from "../../../network/resources/movie";
import ImagesSection from "../../image/images-section/ImagesSection";

export interface MovieImagesSectionProps {
  movieId: number;
  movieTitle: string;
}

const MovieImagesSection: React.FC<MovieImagesSectionProps> = ({
  movieId,
  movieTitle,
}) => {
  return (
    <Fetch
      endpoint={getMovieImages(movieId)}
      render={({ data, isLoading, error }) => (
        <ImagesSection
          title="Gallery"
          isLoading={isLoading}
          error={error}
          images={data?.backdrops.map(
            getMovieImageDescription(movieId, movieTitle, ImageType.Backdrop)
          )}
          imageType={ImageType.Backdrop}
          sizes={{ xs: BackdropSizes.Big, sm: BackdropSizes.Regular }}
          rowCount={{ xs: 1, sm: 2, md: 3 }}
          count={9}
          linkLabel="See all images"
          linkHref={`/movie/images?id=${movieId}&type=${ImageType.Backdrop}`}
        />
      )}
    />
  );
};

export default MovieImagesSection;
