import { useEffect, useState } from "react";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import SearchedMoviesList from "../movie/searched-movies-list/SearchedMoviesList";
import TrendingMoviesList from "../movie/sorted-movies-list/TrendingMoviesList";
import SearchBar from "../search/SearchBar";

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>();

  useEffect(() => {}, [searchText]);

  return (
    <div>
      <SearchBar onSubmit={setSearchText} />
      {searchText ? (
        <SearchedMoviesList search={searchText} />
      ) : (
        <TrendingMoviesList timeWindow={TrendingTimeWindow.Day} />
      )}
    </div>
  );
};

export default Home;
