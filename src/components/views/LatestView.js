import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_movie_most_popular, imageUrlBase, image_sizes } from '../../config/actions/movieActions';

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


class LatestView extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    // componentDidMount() {
    //     fetch_movie_most_popular();
    // }
    getExerpt(str) {
        let exerpt = str.split(' ').slice(0, 10);
        return exerpt.join(' ');
    }

    render() {
        return (
            <div className="latest-movies">
                <h3 className="text-center mt-2 mb-4">Popular Movies</h3>
                <div className="row">
                    { this.props.most_popular_movies.map((movie, index) => {
                        return (
                            <div key={ index.toString() } className="col-sm-12 col-md-6 col-lg-4 my-3">
                                <div className="container-fluid d-flex">

                                    <div className="img-container">
                                        <img src={ imageUrlBase + image_sizes[1] + movie.poster_path } alt="poster image" className="rounded poster-image" />
                                    </div>

                                    <div className="movie-info px-3 d-flex flex-column justify-content-around">
                                        <h2 className="movie--title">{ movie.title }</h2>
                                        <div className="description">
                                            <p>{ this.getExerpt(movie.overview) }  <a href="">[...continue]</a> </p>
                                        </div>
                                        <div className="btn-group btn-group-sm mr-auto" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-sm btn-warning">Watch Trailer</button>
                                            <button type="button" className="btn btn-sm btn-info">Read More</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        most_popular_movies: state.movies.most_popular_movies
    }
}

export default connect(mapStateToProps, { fetch_movie_most_popular })(LatestView);