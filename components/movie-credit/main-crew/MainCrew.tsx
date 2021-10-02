import { CrewMember } from "../../../models/MovieCredits";
import CrewDepartment from "../crew-department/CrewDepartment";

export interface MainCrewProps {
  crew: CrewMember[];
}

const MainCrew: React.FC<MainCrewProps> = ({ crew }) => {
  const directors = crew.filter((person) => person.job === "Director");
  const writers = crew.filter((person) => person.department === "Writing");

  return (
    <>
      <CrewDepartment
        department="Directed by"
        crew={directors}
        showJob={false}
      />
      <CrewDepartment department="Written by" crew={writers} />
    </>
  );
};

export default MainCrew;
