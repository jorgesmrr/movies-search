import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import SearchScreen from "../components/screen/search-screen/SearchScreen";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Movies details</title>
        <meta name="description" content="Search results" />
      </Head>

      <SearchScreen search={router.query.q as string} />
    </div>
  );
}
