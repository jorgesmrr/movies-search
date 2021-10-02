import { UseRequestState } from "@bit/jorgemoreira.headless-react.hooks";
import Spinner from "@bit/jorgemoreira.headless-react.progress.spinner";
import {
  Alert,
  Heading1,
  Heading2,
  LimitedWidth,
  RegularPageContent,
} from "../../style/style";
import theme from "../../style/theme";
import CastList from "../../movie-credit/cast-list/CastList";
import MovieCredits from "../../../models/MovieCredits";
import * as S from "./MovieCreditsScreen.styles";
import MainCrew from "../../movie-credit/main-crew/MainCrew";
import CrewDepartmentsList from "../../movie-credit/crew-departments-list/CrewDepartmentsList";

export type MovieCreditsScreenProps = UseRequestState<MovieCredits>;

const MovieCreditsScreen: React.FC<MovieCreditsScreenProps> = ({
  data: credits,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner
          dataTestId="movie-details__spinner"
          primaryColor={theme.color.accent.default}
        />
      </S.SpinnerWrapper>
    );
  }

  if (credits) {
    return (
      <RegularPageContent>
        <LimitedWidth>
          <section>
            <Heading1>Cast & Crew</Heading1>

            <MainCrew crew={credits.crew} />

            <section>
              <Heading2>Cast</Heading2>
              <CastList cast={credits.cast} />
            </section>

            <section>
              <Heading2>Crew</Heading2>
              <CrewDepartmentsList crew={credits.crew} />
            </section>
          </section>
        </LimitedWidth>
      </RegularPageContent>
    );
  }

  return (
    <LimitedWidth>
      <Alert>Failed to load data. Please try again later.</Alert>
    </LimitedWidth>
  );
};

export default MovieCreditsScreen;
