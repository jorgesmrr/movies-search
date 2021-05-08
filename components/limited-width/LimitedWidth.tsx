import styled from "styled-components";

interface LimitedWidthProps {
  maxWidth?: number;
}

const LimitedWidth = styled.div`
  max-width: ${(props: LimitedWidthProps) => (props.maxWidth || 78) + "rem"};
  margin: 0 auto;
`;

export default LimitedWidth;
