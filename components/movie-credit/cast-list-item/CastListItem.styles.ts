import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageSlot = styled.div`
  flex: 0 0 5rem;
  border-radius: ${({ theme }) => theme.dimensions.radius};
  overflow: hidden;
`;

export const TextSlot = styled.div`
  flex: 1 1 auto;
`;

export const Character = styled.p`
  color: ${({ theme }) => theme.color.neutral.light};
`;
