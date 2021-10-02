import styled from "styled-components";
import { LimitedWidth } from "../../style/style";

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentsWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 1rem;
  flex: 1 0 auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px -10px 20px,
    rgba(0, 0, 0, 0.23) 0px -6px 6px;
`;

export const ContentsSection = styled.section`
  position: relative;
  top: -3.5rem;
`;

export const OverviewWrapper = styled(LimitedWidth)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
