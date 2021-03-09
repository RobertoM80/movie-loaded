import ErrorBoundary from "components/shared/ErrorBoundary";
import MovieCard from "components/shared/MovieCard";
import Overlay from "components/shared/Overlay";
import OverlayTrailer from "components/shared/OverlayTrailer";
import { useSelector } from "react-redux";
import { useMovies } from "hooks/movies";

function AllMoviesView(props) {
  const { active, movies } = useMovies();
  const isOverlayActive = useSelector((state) => state.overlay.isOverlayActive);
  const title = `${active[0].toUpperCase()}${active.substr(1)} Movies...`;

  return (
    <ErrorBoundary place="Popular">
      <div className="latest-movies">
        {isOverlayActive && (
          <Overlay>
            <OverlayTrailer />
          </Overlay>
        )}

        <h3 className="text-center mt-2 mb-4">{title}</h3>
        <div className="row">
          {movies.length > 0 ? (
            movies.map((movie, index) => {
              return (
                <MovieCard key={movie.title} index={index} movie={movie} />
              );
            })
          ) : (
            <h1>No Movies</h1>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default AllMoviesView;
