import styled from "styled-components";

const LimitedWidth = styled.div<{ maxWidth?: number }>`
  max-width: ${(props) => (props.maxWidth || props.theme.pageWidth) + "rem"};
  margin: 0 auto;
`;

export default LimitedWidth;
