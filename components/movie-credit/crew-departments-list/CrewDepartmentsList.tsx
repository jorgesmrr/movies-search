import { CrewMember } from "../../../models/MovieCredits";
import CrewDepartment from "../crew-department/CrewDepartment";

export interface CrewDepartmentsListProps {
  crew: CrewMember[];
}

const CrewDepartmentsList: React.FC<CrewDepartmentsListProps> = ({ crew }) => {
  const crewByDepartment = {};

  crew.forEach((member) => {
    if (member.department === "Writing" || member.job === "Director") {
      return;
    }

    if (!crewByDepartment[member.department]) {
      crewByDepartment[member.department] = [];
    }

    crewByDepartment[member.department].push(member);
  });

  return (
    <div>
      {Object.keys(crewByDepartment)
        .sort()
        .map((department) => (
          <CrewDepartment
            key={department}
            department={department}
            crew={crewByDepartment[department]}
          />
        ))}
    </div>
  );
};

export default CrewDepartmentsList;
