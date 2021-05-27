import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import SearchScreen from "../components/screen/search-screen/SearchScreen";

const SearchPage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Search results</title>
      </Head>

      <SearchScreen search={router.query.q as string} />
    </div>
  );
};
export default SearchPage;
