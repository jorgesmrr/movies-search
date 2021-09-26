import { useContext } from "react";
import { ImagesListContext } from "./ImagesList";
import ImagesListError from "./ImagesListError";
import * as S from "./ImagesListGrid.styles";

export interface ImagesListGridProps {
  columns: number;
}

const ImagesListGrid: React.FC<ImagesListGridProps> = ({ columns }) => {
  const contextValue = useContext(ImagesListContext);

  if (!contextValue) return null;

  const { isLoading, error, images, renderChild } = contextValue;

  if (error) {
    return <ImagesListError />;
  }

  if (!isLoading && !images) {
    return null;
  }

  // TODO improve aria-label
  return (
    <S.Grid aria-label="images list" columns={columns}>
      {images.map((_, index) => {
        const image = !isLoading ? images[index] : undefined;

        return (
          <li key={image?.key || index} aria-label={image?.title}>
            {renderChild(image)}
          </li>
        );
      })}
    </S.Grid>
  );
};

export default ImagesListGrid;
