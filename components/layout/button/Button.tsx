import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.neutral.darker};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral.default};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.neutral.dark};
  }
`;

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
