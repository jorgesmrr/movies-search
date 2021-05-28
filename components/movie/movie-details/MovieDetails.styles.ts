import styled from "styled-components";
import { Badge, Card, ListNone } from "../../style/style";

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

export const AboutCard = styled(Card)`
  margin: 1rem 0;
`;
