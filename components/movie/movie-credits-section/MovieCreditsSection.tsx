import ImageType from "../../../models/ImageType";
import { ProfileSizes } from "../../../network/constants";
import Fetch from "@bit/jorgemoreira.headless-react.network.fetch";
import { getMovieCreditImageDescription } from "../../../network/helpers";
import ImagesSection from "../../image/images-section/ImagesSection";
import { getMovieCredits } from "../../../network/resources/movie";

export interface MovieCreditsSectionProps {
  movieId: number;
}

const MovieCreditsSection: React.FC<MovieCreditsSectionProps> = ({
  movieId,
}) => {
  const sizes = { xs: ProfileSizes.Medium };
  const rowCount = { xs: 3, sm: 4, md: 6 };
  const count = rowCount.md * 4;

  return (
    <Fetch
      endpoint={getMovieCredits(movieId)}
      render={({ data, isLoading, error }) => (
        <ImagesSection
          title="Cast"
          images={data?.cast.map(getMovieCreditImageDescription)}
          imageType={ImageType.Poster}
          isLoading={isLoading}
          error={error}
          sizes={sizes}
          rowCount={rowCount}
          count={count}
          linkLabel="See full cast & crew"
          linkHref={`/movie/credits?id=${movieId}`}
        />
      )}
    />
  );
};

export default MovieCreditsSection;
