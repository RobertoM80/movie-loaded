import React, { Component } from 'react';
import { fetch_movie_most_popular, fetch_youtube_trailer, imageUrlBase, image_sizes } from '../../config/actions/movieActions';
import { connect } from 'react-redux';
import { getExerpt } from '../../config/reusableFunctions';
import ErrorBoundary from '../shared/ErrorBoundary';
import MovieCard from '../shared/MovieCard';
import Overlay from '../shared/Overlay';


class PopularView extends Component {

    iframe(html) {
        return { __html: html }
    }

    render() {
        return (
            <ErrorBoundary place='Popular'>
                <div className="latest-movies">

                    { this.props.isOverlayActive &&
                        <Overlay>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-5">
                                        { this.props.most_popular_movies.map((movie, index) => {
                                            if (movie.title === this.props.current_youtube_trailer_movie_title) return (
                                                <div className="overlay-trailer-infos">
                                                    <img key={ index + 1 } src={ imageUrlBase + image_sizes[4] + movie.backdrop_path } alt="poster image" className="rounded poster-image img-fluid d-none d-lg-block" />
                                                    <h3 className="my-3 d-none d-sm-block">{ movie.title }</h3>
                                                    <p className="d-none d-md-block d-lg-block d-xl-block">{ movie.overview }</p>
                                                    <p className="d-none d-sm-block d-md-none">{ getExerpt(movie.overview, 10) }...</p>
                                                </div>
                                            )
                                        }) }

                                    </div>
                                    <div className="col-sm-7">
                                        <div dangerouslySetInnerHTML={ this.iframe(`<iframe style="width:45vw;height:25vw" src="https://www.youtube.com/embed/${this.props.current_youtube_trailer_movie_id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`) } />
                                    </div>
                                </div>
                            </div>
                        </Overlay>
                    }

                    <h3 className="text-center mt-2 mb-4">Popular Movies..</h3>
                    <div className="row">
                        { this.props.most_popular_movies.map((movie, index) => {
                            return (
                                <MovieCard
                                    key={ index }
                                    index={ index }
                                    movie={ movie }
                                />
                            )
                        }) }
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = state => {
    return {
        most_popular_movies: state.movies.most_popular_movies,
        current_youtube_trailer_movie_id: state.movies.current_youtube_trailer_movie_id,
        current_youtube_trailer_movie_title: state.movies.current_youtube_trailer_movie_title,
        isOverlayActive: state.overlay.isOverlayActive,
    }
}

export default connect(mapStateToProps, { fetch_movie_most_popular, fetch_youtube_trailer })(PopularView);