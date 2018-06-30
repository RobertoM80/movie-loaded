import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openOverlay } from '../../config/actions/overlayActions';
import { fetch_youtube_trailer, imageUrlBase, image_sizes } from '../../config/actions/movieActions';
import { getExerpt } from '../../config/reusableFunctions';

class MovieCard extends Component {

    startTrailer(movie_title) {
        this.props.openOverlay();
        this.props.fetch_youtube_trailer(movie_title);
    }

    render() {
        return (
            <div key={ this.props.index.toString() } className="col-sm-12 col-md-6 col-lg-4 my-3">
                <div className="container-fluid d-flex px-0">

                    <div className="img-container">
                        <img src={ imageUrlBase + image_sizes[1] + this.props.movie.poster_path } alt="poster image" className="rounded poster-image" />
                    </div>

                    <div className="movie-info px-3 d-flex flex-column justify-content-around">
                        <h2 className="movie--title">{ this.props.movie.title }</h2>
                        <div className="description">
                            <p className="d-lg-none d-xl-block" >{ getExerpt(this.props.movie.overview, 20) }...  <a href="">[continue]</a> </p>
                            <p className="d-none d-lg-block d-xl-none" >{ getExerpt(this.props.movie.overview, 10) }...  <a href="">[continue]</a> </p>
                        </div>
                        <div className="btn-group btn-group-sm mr-auto" role="group" aria-label="Basic example">
                            <button
                                type="button"
                                className="btn btn-sm btn-warning"
                                onClick={ () => this.startTrailer(this.props.movie.title) }>Watch Trailer</button>
                            {/* <button type="button" className="btn btn-sm btn-info">Read More</button> */ }
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.object,
    index: PropTypes.number,
    openOverlay: PropTypes.func,
    fetch_youtube_trailer: PropTypes.func
};

export default connect(null, { fetch_youtube_trailer, openOverlay })(MovieCard);