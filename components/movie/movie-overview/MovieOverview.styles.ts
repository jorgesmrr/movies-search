import styled from "styled-components";
import { Badge, Card, Heading1, ListNone } from "../../style/style";

export const RootCard = styled(Card)`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: clamp(4rem, 25vw, 16rem) 1fr;
  grid-template-areas:
    "poster heading"
    "text text";

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0.5rem 1.5rem;
    grid-template-areas:
      "poster heading"
      "poster text";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: 0;
    margin: 0;
  }
`;

export const PosterSlot = styled.div`
  grid-area: poster;
  align-self: center;
`;

export const HeadingSlot = styled.div`
  grid-area: heading;
  align-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-self: end;
  }
`;

export const TextSlot = styled.div`
  grid-area: text;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-self: start;
  }
`;

export const Title = styled(Heading1)`
  margin-top: 0;
`;

export const Synopsis = styled.p`
  margin: 1rem 0;
`;

export const BadgesList = styled(ListNone)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const ExplicitBadge = styled(Badge)`
  text-transform: uppercase;
`;

export const GenreBadge = styled(Badge)`
  color: ${({ theme }) => theme.color.neutral.darkest};
  background-color: ${({ theme }) => theme.color.neutral.lighter};
`;
