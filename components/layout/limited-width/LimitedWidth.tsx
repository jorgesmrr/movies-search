import styled from "styled-components";

const LimitedWidth = styled.div<{ maxWidth?: number }>`
  max-width: ${(props) =>
    (props.maxWidth || props.theme.dimensions.pageWidth) + "rem"};
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default LimitedWidth;
