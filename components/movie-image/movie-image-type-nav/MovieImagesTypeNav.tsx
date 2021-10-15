import Link from "next/link";
import ImageType from "../../../models/ImageType";
import Dropdown from "../../dropdown/Dropdown";

export interface MovieImagesTypeNavProps {
  movieId: number;
  selectedImageType: ImageType;
}

const types = [ImageType.Backdrop, ImageType.Poster, ImageType.Logo];

const imageTypeLabels = {
  [ImageType.Backdrop]: "Backdrops",
  [ImageType.Poster]: "Posters",
  [ImageType.Logo]: "Logos",
};

const MovieImagesTypeNav: React.FC<MovieImagesTypeNavProps> = ({
  movieId,
  selectedImageType,
}) => {
  return (
    <Dropdown initialLabel={imageTypeLabels[selectedImageType]}>
      {types.map((type) => (
        <Link key={type} href={`/movie/images?id=${movieId}&type=${type}`}>
          <a>
            <Dropdown.Item label={imageTypeLabels[type]} />
          </a>
        </Link>
      ))}
    </Dropdown>
  );
};

export default MovieImagesTypeNav;
