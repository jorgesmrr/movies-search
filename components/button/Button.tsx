import * as S from "./Button.styles";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;
