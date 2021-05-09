import Head from "next/head";
import HomeScreen from "../components/screen/home-screen/HomeScreen";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Discover movies" />
      </Head>

      <HomeScreen />
    </div>
  );
}
