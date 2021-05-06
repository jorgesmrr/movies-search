import React, { useState } from "react";

export interface SearchBarProps {
  onSubmit?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setText(event.target.value);

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onSubmit?.(text);
    }
  };

  const onClearClick = () => setText("");

  return (
    <div>
      <input
        type="text"
        aria-label="search bar input"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div data-testid="search-bar__clear" onClick={onClearClick} />
    </div>
  );
};

export default SearchBar;
