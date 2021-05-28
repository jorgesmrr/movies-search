import { useRouter } from "next/dist/client/router";
import Navigation from "../layout/navigation/Navigation";
import * as S from "./Page.styles";

const Page: React.FC = ({ children }) => {
  const router = useRouter();

  const onSubmitSearch = (search: string) => {
    router.push(`/search?q=${encodeURI(search)}`);
  };

  return (
    <S.Container>
      <Navigation onSubmitSearch={onSubmitSearch} />
      <S.Contents>{children}</S.Contents>
    </S.Container>
  );
};

export default Page;
