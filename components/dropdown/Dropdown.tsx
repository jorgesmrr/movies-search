import { useState } from "react";
import * as React from "react";
import * as S from "./Dropdown.styles";
import { Button } from "../button/Button.styles";
import ChevronDownIcon from "../icon/ChevronDownIcon";
import { useToggle } from "@bit/jorgemoreira.headless-react.hooks";
import ChevronUpIcon from "../icon/ChevronUpIcon";
import DropdownItem, { DropdownItemProps } from "./DropdownItem";

interface DropdownContextValue {
  setLabel: (label: string) => void;
}

export const DropdownContext = React.createContext<DropdownContextValue>(
  undefined
);

export type DropdownComposition = {
  Item: React.FC<DropdownItemProps>;
};

export interface DropdownProps {
  initialLabel: string;
  onChange?: (label: string) => void;
}

const Dropdown: DropdownComposition & React.FC<DropdownProps> = ({
  initialLabel,
  onChange,
  children,
}) => {
  const {
    isOn: isShowingItems,
    setOff: hideItems,
    onToggle: toggleItems,
  } = useToggle(false);

  const [selectedItemLabel, setSelectedItemLabel] = useState(initialLabel);

  const onItemSelected = (label: string) => {
    hideItems();
    setSelectedItemLabel(label);
    onChange?.(label);
  };

  return (
    <S.Root>
      <Button onClick={toggleItems}>
        {selectedItemLabel}
        {isShowingItems ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
      <DropdownContext.Provider value={{ setLabel: onItemSelected }}>
        <S.ItemsList isOpen={isShowingItems}>{children}</S.ItemsList>
      </DropdownContext.Provider>
    </S.Root>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
