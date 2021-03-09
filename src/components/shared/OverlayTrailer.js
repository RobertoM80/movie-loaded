import { imageUrlBase, imageSizes } from "config/actions/movieActions";
import { getExerpt } from "config/reusableFunctions";
import { useMovies } from "hooks/movies";
import { useEffect } from "react";

function OverlayTrailer() {
  const {
    active,
    movies,
    activeMovie,
    currentYoutubeTrailerMovieTitle,
    currentYoutubeTrailerMovieId,
  } = useMovies();

  function iframe(html) {
    return { __html: html };
  }

  useEffect(() => {
    console.log(
      "=========",
      movies,
      active,
      activeMovie,
      currentYoutubeTrailerMovieTitle,
      currentYoutubeTrailerMovieId,
      imageUrlBase,
      imageSizes
    );
  }, [
    movies,
    active,
    activeMovie,
    currentYoutubeTrailerMovieTitle,
    currentYoutubeTrailerMovieId,
    imageUrlBase,
    imageSizes,
  ]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-5">
          {activeMovie && (
            <div className="overlay-trailer-infos">
              <img
                src={imageUrlBase + imageSizes[4] + activeMovie.backdrop_path}
                alt="poster image"
                className="rounded poster-image img-fluid d-none d-lg-block"
              />
              <h3 className="my-3 d-none d-sm-block">{activeMovie.title}</h3>
              <p className="d-none d-md-block d-lg-block d-xl-block">
                {activeMovie.overview}
              </p>
              <p className="d-none d-sm-block d-md-none">
                {getExerpt(activeMovie.overview, 10)}...
              </p>
            </div>
          )}
        </div>
        <div className="col-sm-7">
          <div
            dangerouslySetInnerHTML={iframe(
              `<iframe style="width:45vw;height:25vw" src="https://www.youtube.com/embed/${currentYoutubeTrailerMovieId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default OverlayTrailer;
