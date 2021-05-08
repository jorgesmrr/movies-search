import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import TopBar from "../top-bar/TopBar";

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.color.neutral.darker};
  min-height: 100vh;
`;

const Page: React.FC = ({ children }) => {
  const router = useRouter();

  const onSubmitSearch = (search: string) => {
    router.push(`/search?q=${encodeURI(search)}`);
  };

  return (
    <PageWrapper>
      <TopBar onSubmitSearch={onSubmitSearch} />
      {children}
    </PageWrapper>
  );
};

export default Page;
