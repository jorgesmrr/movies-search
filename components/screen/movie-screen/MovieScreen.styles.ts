import styled from "styled-components";
import { Heading1, LimitedWidth } from "../../style/style";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Contents = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 1rem;
  flex: 1 0 auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px -10px 20px,
    rgba(0, 0, 0, 0.23) 0px -6px 6px;
`;

export const Grid = styled(LimitedWidth)`
  display: grid;
  padding: 0 1rem;
  gap: 1rem;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "poster title"
    "metadata metadata"
    "text text";

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2rem;
    gap: 0 3rem;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "poster title"
      "poster text";
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 21rem 1fr;
  }
`;

export const TitleSlot = styled.div`
  grid-area: title;
  align-self: center;
`;

export const Title = styled(Heading1)`
  margin-top: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: revert;
  }
`;

export const DetailsSlot = styled.div`
  grid-area: text;
`;

export const MobileMetadataSlot = styled.div`
  grid-area: metadata;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const DesktopMetadataSlot = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    margin-top: 1.25rem;
  }
`;

export const PosterSlot = styled.div`
  grid-area: poster;
  position: relative;
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: translateY(calc(-10rem + 5vh));
  }
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
