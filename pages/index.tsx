import Head from "next/head";
import HomeScreen from "../components/screen/home-screen/HomeScreen";

const HomePage: React.FC = () => (
  <div>
    <Head>
      <title>Movies</title>
      <meta name="description" content="Discover movies" />
    </Head>

    <HomeScreen />
  </div>
);

export default HomePage;
