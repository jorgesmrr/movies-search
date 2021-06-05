import { useRouter } from "next/dist/client/router";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
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
      <Footer />
    </S.Container>
  );
};

export default Page;
