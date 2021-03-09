import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { openOverlay } from "config/actions/overlayActions";
import {
  fetchYoutubeTrailer,
  imageUrlBase,
  imageSizes,
} from "config/actions/movieActions";
import { getExerpt } from "config/reusableFunctions";
import "css/MovieCard.css";

function MovieCard({ index, movie }) {
  const dispatch = useDispatch();

  function startTrailer(movieTitle) {
    dispatch(openOverlay());
    dispatch(fetchYoutubeTrailer(movieTitle));
  }

  function urlReadableTitle(movieTitle) {
    return encodeURIComponent(movieTitle.split(" ").join("-").toLowerCase());
  }

  return (
    <div key={index.toString()} className="col-sm-12 col-md-6 col-lg-4 my-3">
      <div className="container-fluid d-flex px-0">
        <div className="img-container">
          <img
            src={imageUrlBase + imageSizes[1] + movie.poster_path}
            alt="poster image"
            className="rounded poster-image"
          />
        </div>

        <div className="movie-info px-3 d-flex flex-column justify-content-around">
          <h2 className="movie--title">{movie.title}</h2>
          <div className="description">
            <p className="d-lg-none d-xl-block">
              {getExerpt(movie.overview, 20)}...
              <Link
                className=""
                to={"/movie/details/" + urlReadableTitle(movie.title)}
              >
                [continue]
              </Link>
            </p>
            <p className="d-none d-lg-block d-xl-none">
              {getExerpt(movie.overview, 10)}...
              <Link
                className=""
                to={"/movie/details/" + urlReadableTitle(movie.title)}
              >
                [continue]
              </Link>
            </p>
          </div>
          <div
            className="btn-group btn-group-sm mr-auto"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={() => startTrailer(movie.title)}
            >
              Watch Trailer
            </button>
            <Link
              className=""
              to={"/movie/details/" + urlReadableTitle(movie.title)}
            >
              <button type="button" className="btn btn-sm btn-info">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default MovieCard;
