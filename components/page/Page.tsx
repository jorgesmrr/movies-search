import styled from "styled-components";
import TopBar from "../top-bar/TopBar";

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.color.neutral.darker};
  min-height: 100vh;
`;

const Page: React.FC = ({ children }) => {
  return (
    <PageWrapper>
      <TopBar />
      {children}
    </PageWrapper>
  );
};

export default Page;
