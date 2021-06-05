import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Contents = styled.div`
  color: ${({ theme }) => theme.color.white};
`;
