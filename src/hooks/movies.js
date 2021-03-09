import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(null);
  let location = useLocation();
  const popular = useSelector((state) => state.movies.popular);
  const upcoming = useSelector((state) => state.movies.upcoming);
  const rated = useSelector((state) => state.movies.rated);
  const currentYoutubeTrailerMovieId = useSelector(
    (state) => state.trailer.currentYoutubeTrailerMovieId
  );
  const currentYoutubeTrailerMovieTitle = useSelector(
    (state) => state.trailer.currentYoutubeTrailerMovieTitle
  );
  const active = location.pathname.substr(1);

  useEffect(() => {
    let activeMovie = movies.filter(
      (movie) => movie.title === currentYoutubeTrailerMovieTitle
    )[0];
    console.log("?????", activeMovie, currentYoutubeTrailerMovieTitle);
    setActiveMovie(activeMovie);
  }, [currentYoutubeTrailerMovieTitle]);

  useEffect(() => {
    const mov = { popular, upcoming, rated };
    setMovies(mov[active]);
  }, [location, popular, upcoming, rated]);

  return {
    active,
    movies,
    activeMovie,
    currentYoutubeTrailerMovieTitle,
    currentYoutubeTrailerMovieId,
  };
}

// function useActiveMovies() {
//   const movies = useMovies();
//   const [activeMovie, setActiveMovie] = useState(null);
//   const currentYoutubeTrailerMovieId = useSelector(
//     (state) => state.trailer.currentYoutubeTrailerMovieId
//   );
//   const currentYoutubeTrailerMovieTitle = useSelector(
//     (state) => state.trailer.currentYoutubeTrailerMovieTitle
//   );

//   useEffect(() => {
//     let activeMovie = movies.filter(
//       (movie) => movie.title === currentYoutubeTrailerMovieTitle
//     )[0];
//     setActiveMovie(activeMovie);
//   }, [currentYoutubeTrailerMovieTitle]);

//   return {
//     movies,
//     activeMovie,
//     currentYoutubeTrailerMovieTitle,
//     currentYoutubeTrailerMovieId,
//   };
// }

export { useMovies };
