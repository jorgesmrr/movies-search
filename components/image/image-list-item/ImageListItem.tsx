import Link from "next/link";
import ImageDescription from "../../../models/ImageDescription";
import ImageType from "../../../models/ImageType";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import { ImageSizes } from "../../../network/constants";
import ImagePlaceholder from "../image-placeholder/ImagePlaceholder";
import TmdbImage from "../tmdb-image/TmdbImage";
import { Alert } from "../../style/style";
import * as S from "./ImageListItem.styles";

export interface ImageListItemProps {
  image: ImageDescription;
  isLoading: boolean;
  imageType: ImageType;
  sizes: ResponsiveProperty<ImageSizes>;
  showTitle?: boolean;
}

const ImageListItem: React.FC<ImageListItemProps> = ({
  isLoading,
  image,
  imageType,
  sizes,
  showTitle,
}) => {
  if (!isLoading && !image) {
    return <Alert>Failed to load</Alert>;
  }

  if (isLoading) {
    return (
      <div>
        <ImagePlaceholder rounded type={imageType} shadowLevel={2} />
        {imageType === ImageType.Poster && showTitle && (
          <S.Title>
            <wbr />
            <br />
            <wbr />
          </S.Title>
        )}
      </div>
    );
  }

  const content = (
    <>
      <ImagePlaceholder rounded type={imageType} shadowLevel={2}>
        <S.ImageWrapper>
          <TmdbImage title={image.title} path={image.path} sizes={sizes} />
          {imageType === ImageType.Backdrop && showTitle && (
            <>
              <S.BackdropOverlay />
              <S.BackdropTitle>{image.title}</S.BackdropTitle>
            </>
          )}
        </S.ImageWrapper>
      </ImagePlaceholder>
      {imageType === ImageType.Poster && showTitle && (
        <S.Title>{image.title}</S.Title>
      )}
    </>
  );

  return image.link ? (
    <Link href={image.link}>
      <a>{content}</a>
    </Link>
  ) : (
    <div>{content}</div>
  );
};

export default ImageListItem;
