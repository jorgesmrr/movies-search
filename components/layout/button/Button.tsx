import styled from "styled-components";
import { transition } from "../../style/style";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.neutral.darker};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  border: none;
  cursor: pointer;
  ${transition("background-color")}

  &:hover {
    background-color: ${({ theme }) => theme.color.accent.dark};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.accent.darker};
  }
`;

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
