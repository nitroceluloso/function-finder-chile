import MovieCatalog from "@/components/movie-catalog";
import { Spinner } from "@/components/spinner/spinner";
import { Suspense } from "react";

const LoadingMovies = () => (
  <div className="flex align-center">
      <Spinner />
  </div>
);

const Home = () => (
  <>
    <Suspense fallback={<LoadingMovies />}>
      <MovieCatalog />
    </Suspense>
  </>
)

export default Home;