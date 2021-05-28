import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import * as S from "./SearchBar.styles";

export interface SearchBarProps {
  onSubmit: (text: string) => void;
}

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
    <S.Bar>
      <S.Input
        value={text}
        type="text"
        aria-label="search bar input"
        placeholder="Search movies..."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div data-testid="search-bar__clear" onClick={onClearClick} />
    </S.Bar>
  );
};

export default SearchBar;
