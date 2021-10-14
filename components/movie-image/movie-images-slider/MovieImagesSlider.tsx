import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ImageType from "../../../models/ImageType";
import { MovieImage } from "../../../models/MovieImages";
import {
  BackdropSizes,
  LogoSizes,
  PosterSizes,
} from "../../../network/constants";
import ImagePlaceholder from "../../image/image-placeholder/ImagePlaceholder";
import TmdbImage from "../../image/tmdb-image/TmdbImage";
import * as S from "./MovieImagesSlider.styles";

export interface MovieImagesSliderProps {
  images: MovieImage[];
  selectedIndex: number;
  type: ImageType;
  movieId: number;
  movieTitle: string;
}

const smallSizesMap = {
  [ImageType.Backdrop]: {
    xs: BackdropSizes.Small,
  },
  [ImageType.Poster]: {
    xs: PosterSizes.Medium,
  },
  [ImageType.Logo]: {
    xs: LogoSizes.Tiny,
  },
};

const bigSizesMap = {
  [ImageType.Backdrop]: {
    xs: BackdropSizes.Big,
  },
  [ImageType.Poster]: {
    xs: PosterSizes.Big,
  },
  [ImageType.Logo]: {
    xs: LogoSizes.Big,
  },
};

const MovieImagesSlider: React.FC<MovieImagesSliderProps> = ({
  images,
  selectedIndex,
  type,
  movieId,
  movieTitle,
}) => {
  const listRef = useRef(null);
  const itemRef = useRef(null);
  const [listStyle, setListStyle] = useState(null);

  const [selectedImage, setSelectedImage] = useState(images[selectedIndex]);

  useEffect(() => setSelectedImage(images[selectedIndex]), [selectedIndex]);

  useEffect(() => {
    const list = listRef.current;
    const listWidth = list.offsetWidth;
    const item = itemRef.current;
    const itemWidth = item.offsetWidth;

    const itemsPerRow = Math.floor(listWidth / itemWidth);

    const itemSlotWidth = listWidth / itemsPerRow;

    const maxTranslation = -images.length * itemSlotWidth + listWidth;

    const itemTranslation =
      -(selectedIndex + 0.5) * itemSlotWidth + listWidth / 2;

    const translation = Math.min(0, Math.max(itemTranslation, maxTranslation));

    setListStyle({
      transform: `translateX(calc(${translation}px))`,
    });
  }, [selectedIndex]);

  return (
    <div>
      <S.MainImage>
        <ImagePlaceholder type={type} rounded shadowLevel={2}>
          <TmdbImage
            title={movieTitle}
            path={selectedImage.path}
            sizes={bigSizesMap[type]}
          />
        </ImagePlaceholder>
      </S.MainImage>

      <S.Nav ref={listRef}>
        <S.List style={listStyle}>
          {images.map((image, index) => (
            <S.ListItem key={image.path} ref={itemRef}>
              <Link
                href={`/movie/images?id=${movieId}&type=${type}&index=${index}`}
                scroll={false}
              >
                <a>
                  <ImagePlaceholder
                    type={type}
                    rounded
                    shadowLevel={2}
                    persistentBorder={selectedIndex === index}
                  >
                    <TmdbImage
                      title={movieTitle}
                      path={image.path}
                      sizes={smallSizesMap[type]}
                    />
                  </ImagePlaceholder>
                </a>
              </Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </div>
  );
};

export default MovieImagesSlider;
