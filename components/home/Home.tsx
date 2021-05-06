import SortedMoviesList, {
  MovieSortBy,
} from "../movie/sorted-movies-list/SortedMoviesList";
import SearchBar from "../search/SearchBar";

const Home: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <SortedMoviesList sort={MovieSortBy.Popular} />
    </div>
  );
};

export default Home;
