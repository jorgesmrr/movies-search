import Head from "next/head";
import Home from "../components/home/Home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Discover movies" />
      </Head>

      <Home />
    </div>
  );
}
