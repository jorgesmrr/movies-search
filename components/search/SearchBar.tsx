import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import styled from "styled-components";
import { scalableBorder, transition } from "../style/style";

export interface SearchBarProps {
  onSubmit: (text: string) => void;
}

const Bar = styled.div`
  position: relative;
  display: inline-flex;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.neutral.darker};
  border-radius: ${({ theme }) => theme.dimensions.radius};
  padding: 0.5rem;
  width: 70vw;
  box-shadow: ${({ theme }) => theme.shadow[0]};
  opacity: 0.75;
      }
  ${({ theme }) =>
    scalableBorder(theme, {
      width: "2px",
      states: ["hover", "focus", "focus-within"],
    })}
  ${transition("box-shadow")}

  &:hover,
  &:focus,
  &:focus-within {
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 20rem;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  outline: none;
  font-size: 1.125rem;

  &:placeholder {
    color: ${({ theme }) => theme.color.neutral.lighter};
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const router = useRouter();
  const [text, setText] = useState((router?.query.q || "") as string);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setText(event.target.value);

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onSubmit?.(text);
    }
  };

  const onClearClick = () => setText("");

  return (
    <Bar>
      <Input
        value={text}
        type="text"
        aria-label="search bar input"
        placeholder="Search movies..."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div data-testid="search-bar__clear" onClick={onClearClick} />
    </Bar>
  );
};

export default SearchBar;
