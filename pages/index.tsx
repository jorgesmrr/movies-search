import Head from "next/head";
import Home from "../components/home/Home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Movies and TV shows</title>
        <meta
          name="description"
          content="Search and discover movies and TV shows"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400&family=Source+Sans+Pro:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Home />
    </div>
  );
}
