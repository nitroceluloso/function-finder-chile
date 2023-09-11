import { getMovieList } from "@/services/movies/movies.services";

const Home = async () => {
  const movieList = await getMovieList();
  return (
  <>
    <h1>Movies</h1>
    <ul>
      {
        movieList.map(movie => {
          return (<li key={movie.id}>{movie.title}</li>)
        })
      }
    </ul>
  </>
  )
}

export default Home;