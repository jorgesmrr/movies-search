import { useEffect, useState } from "react";
import MovieSort from "../../models/MovieSort";
import SearchedMoviesList from "../movie/searched-movies-list/SearchedMoviesList";
import SortedMoviesList from "../movie/sorted-movies-list/SortedMoviesList";
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
        <SortedMoviesList sort={MovieSort.Popular} />
      )}
    </div>
  );
};

export default Home;
