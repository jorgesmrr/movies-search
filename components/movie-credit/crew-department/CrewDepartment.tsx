import React from "react";
import { CrewMember } from "../../../models/MovieCredits";
import { Heading3 } from "../../style/style";
import * as S from "./CrewDepartment.styles";

export interface CrewDepartmentProps {
  department: string;
  showJob?: boolean;
  crew: CrewMember[];
}

const CrewDepartment: React.FC<CrewDepartmentProps> = ({
  department,
  showJob = true,
  crew,
}) => {
  return (
    <section>
      <Heading3>{department}</Heading3>
      <S.List>
        {crew.map((member) => (
          <React.Fragment key={`${member.job}-${member.id}`}>
            <dt>{member.name}</dt>
            <dd>{showJob && member.job}</dd>
          </React.Fragment>
        ))}
      </S.List>
    </section>
  );
};

export default CrewDepartment;
