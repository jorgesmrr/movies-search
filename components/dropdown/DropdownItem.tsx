import { useContext } from "react";
import { DropdownContext } from "./Dropdown";
import * as S from "./DropdownItem.styled";

export interface DropdownItemProps {
  label: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label }) => {
  const contextValue = useContext(DropdownContext);

  return <S.Item onClick={() => contextValue.setLabel(label)}>{label}</S.Item>;
};

export default DropdownItem;
