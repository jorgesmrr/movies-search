import Link from "next/link";
import ImageType from "../../../models/ImageType";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import { ImageSizes } from "../../../network/constants";
import ImagePlaceholder from "../../image/image-placeholder/ImagePlaceholder";
import TmdbImage from "../../image/tmdb-image/TmdbImage";
import { Alert } from "../../style/style";
import * as S from "./ImageListItem.styles";

interface ImageListItemProps {
  title?: string;
  link?: string;
  imagePath: string;
  isLoading: boolean;
  imageType: ImageType;
  sizes: ResponsiveProperty<ImageSizes>;
}

const ImageListItem: React.FC<ImageListItemProps> = ({
  isLoading,
  title,
  link,
  imagePath,
  imageType,
  sizes,
}) => {
  if (!isLoading && !title) {
    return <Alert>Failed to load</Alert>;
  }

  if (isLoading) {
    return (
      <div>
        <ImagePlaceholder rounded type={imageType} shadowLevel={2} />
        {imageType === ImageType.Poster && (
          <S.Title>
            <wbr />
            <br />
            <wbr />
          </S.Title>
        )}
      </div>
    );
  }

  return (
    <Link href={`/movie?id=${link}`}>
      <a>
        <ImagePlaceholder rounded type={imageType} shadowLevel={2}>
          <S.ImageWrapper>
            <TmdbImage title={title} path={imagePath} sizes={sizes} />
            {imageType === ImageType.Backdrop && (
              <>
                <S.BackdropOverlay />
                <S.BackdropTitle>{title}</S.BackdropTitle>
              </>
            )}
          </S.ImageWrapper>
        </ImagePlaceholder>
        {imageType === ImageType.Poster && <S.Title>{title}</S.Title>}
      </a>
    </Link>
  );
};

export default ImageListItem;
