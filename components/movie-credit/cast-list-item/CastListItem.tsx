import ImageType from "../../../models/ImageType";
import { CastMember } from "../../../models/MovieCredits";
import { ProfileSizes } from "../../../network/constants";
import ImagePlaceholder from "../../image/image-placeholder/ImagePlaceholder";
import TmdbImage from "../../image/tmdb-image/TmdbImage";
import * as S from "./CastListItem.styles";

export interface CastListItemProps {
  credit: CastMember;
}

const CastListItem: React.FC<CastListItemProps> = ({ credit }) => {
  return (
    <S.ListItem>
      <S.ImageSlot>
        <ImagePlaceholder type={ImageType.Poster}>
          <TmdbImage
            title={credit.name}
            path={credit.photo}
            sizes={{ xs: ProfileSizes.Medium }}
          />
        </ImagePlaceholder>
      </S.ImageSlot>
      <S.TextSlot>
        <p>{credit.name}</p>
        {credit.character && <S.Character>as {credit.character}</S.Character>}
      </S.TextSlot>
    </S.ListItem>
  );
};

export default CastListItem;
