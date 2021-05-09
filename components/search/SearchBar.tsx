import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import styled from "styled-components";

export interface SearchBarProps {
  onSubmit: (text: string) => void;
}

const Bar = styled.div`
  display: inline-flex;
  gap: 1rem;
  background-color: ${(props) => props.theme.color.neutral.darker};
  border-radius: ${(props) => props.theme.radius};
  padding: 0.5rem;
  width: 20rem;
  box-shadow: ${(props) => props.theme.shadow[0]};
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.color.white};
  outline: none;
  font-size: 1.125rem;

  &:placeholder {
    color: ${(props) => props.theme.color.neutral.lighter};
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
