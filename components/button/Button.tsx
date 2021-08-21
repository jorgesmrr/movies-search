import * as S from "./Button.styles";

interface ButtonProps {
  ariaLabel?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  ariaLabel,
  disabled,
  onClick,
  children,
}) => {
  return (
    <S.Button aria-label={ariaLabel} disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
