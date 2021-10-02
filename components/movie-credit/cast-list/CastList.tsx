import { CastMember } from "../../../models/MovieCredits";
import CastListItem from "../cast-list-item/CastListItem";
import * as S from "./CastList.styles";

export interface CastListProps {
  cast: CastMember[];
}

const CastList: React.FC<CastListProps> = ({ cast }) => {
  return (
    <S.List>
      {cast.map((credit) => (
        <CastListItem key={credit.id} credit={credit} />
      ))}
    </S.List>
  );
};

export default CastList;
