import { fireEvent } from "@testing-library/dom";
import { customRender } from "../../utils/testing";
import Dropdown from "./Dropdown";

const initialLabel = "Select something";
const itemToClickLabel = "Some item here";

describe("dropdown list", () => {
  it("should not show the list on render", () => {
    const { getByRole } = customRender(
      <Dropdown initialLabel={initialLabel}>
        <Dropdown.Item label={itemToClickLabel} />
      </Dropdown>
    );

    expect(getByRole("list")).not.toBeVisible();
  });

  it("should show the list after click", () => {
    const { getByRole } = customRender(
      <Dropdown initialLabel={initialLabel}>
        <Dropdown.Item label={itemToClickLabel} />
      </Dropdown>
    );

    const dropdownBtn = getByRole("button");
    fireEvent.click(dropdownBtn);

    expect(getByRole("list")).toBeVisible();
  });
});

describe("dropdown label", () => {
  it("should show the initial label", () => {
    const { getByRole } = customRender(
      <Dropdown initialLabel={initialLabel}>
        <Dropdown.Item label={itemToClickLabel} />
      </Dropdown>
    );

    const dropdownBtn = getByRole("button");

    expect(dropdownBtn).toHaveTextContent(initialLabel);
  });

  it("should change the label after clicking an item", () => {
    const { getByRole } = customRender(
      <Dropdown initialLabel={initialLabel}>
        <Dropdown.Item label={itemToClickLabel} />
      </Dropdown>
    );

    const dropdownBtn = getByRole("button");
    fireEvent.click(dropdownBtn);

    const itemToClick = getByRole("listitem");

    fireEvent.click(itemToClick);

    expect(getByRole("button")).toHaveTextContent(itemToClickLabel);
  });
});
