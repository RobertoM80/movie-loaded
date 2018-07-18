import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorBoundary from '../shared/ErrorBoundary';
import MovieCard from '../shared/MovieCard';
import Overlay from '../shared/Overlay';
import OverlayTrailer from '../shared/OverlayTrailer';

class PopularView extends Component {

    render() {
        return (
            <ErrorBoundary place='Popular'>
                <div className="latest-movies">

                    { this.props.isOverlayActive &&
                        <Overlay>
                            <OverlayTrailer />
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
        isOverlayActive: state.overlay.isOverlayActive
    }
}

export default connect(mapStateToProps, null)(PopularView);