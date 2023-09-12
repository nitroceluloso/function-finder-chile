import MovieCatalog from "@/components/movie-catalog";
import { getMovieList } from "@/services/movies/movies.services";

const Home = async () => {
  const movieList = await getMovieList();
  return (
  <>
    <MovieCatalog movieList={movieList} />
  </>
  )
}

export default Home;