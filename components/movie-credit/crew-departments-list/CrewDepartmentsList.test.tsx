import { customRender } from "../../../utils/testing";
import CrewDepartmentsList from "./CrewDepartmentsList";

describe("component renders", () => {
  it("should group each member in their department", () => {
    const crew = [
      {
        id: 1,
        name: "Mary",
        job: "Set Decoration",
        department: "Art",
      },
      {
        id: 2,
        name: "Bob",
        job: "Production Coordinator",
        department: "Production",
      },
    ];

    const { getByRole } = customRender(<CrewDepartmentsList crew={crew} />);

    expect(getByRole("heading", { level: 3, name: crew[0].department }));
    expect(getByRole("heading", { level: 3, name: crew[1].department }));
  });
});
