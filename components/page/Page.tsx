import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import TopBar from "../layout/top-bar/TopBar";

const PageWrapper = styled.div`
  min-height: 100vh;
`;

const PageContents = styled.div`
  color: ${({ theme }) => theme.color.white};
`;

const Page: React.FC = ({ children }) => {
  const router = useRouter();

  const onSubmitSearch = (search: string) => {
    router.push(`/search?q=${encodeURI(search)}`);
  };

  return (
    <PageWrapper>
      <TopBar onSubmitSearch={onSubmitSearch} />
      <PageContents>{children}</PageContents>
    </PageWrapper>
  );
};

export default Page;
