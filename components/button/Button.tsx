import * as S from "./Button.styles";

interface ButtonProps {
  ariaLabel?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ ariaLabel, onClick, children }) => {
  return (
    <S.Button aria-label={ariaLabel} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
