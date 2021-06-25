import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 4.5rem;
`;

export const ButtonText = styled.div`
  &:first-child {
    padding-left: 0.5rem;
  }

  &:last-child {
    padding-right: 0.5rem;
  }
`;
