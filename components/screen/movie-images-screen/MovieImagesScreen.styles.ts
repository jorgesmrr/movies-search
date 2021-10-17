import styled from "styled-components";
import { Heading1 } from "../../style/style";

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
`;

export const Heading = styled(Heading1)`
  margin-top: 0;
  margin-right: auto;
`;
