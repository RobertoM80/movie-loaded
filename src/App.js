import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetch_movie_best_2018, fetch_movie_highest_rated, fetch_movie_most_popular } from './config/actions/movieActions';
import Header from './components/Header';
import Loader from './components/shared/Loader';
import Footer from './components/Footer';
import NewsView from './components/views/NewsView';
import LatestView from './components/views/LatestView';
import PopularView from './components/views/PopularView';
import './css/App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetch_movie_most_popular();
  }

  render() {
    return (

      <Router hashType="slash">

        <div className="App container-fluid">

          <Loader loading={ this.props.isLoading } />

          <Header></Header>

          <Switch>

            <Route exact path="/" render={ () => {
              return <Redirect to='/popular' />
            } } />

            <Route path="/latest" render={ () => {
              return <Redirect to='/popular' />
            } } />

            <Route path="/popular" component={ PopularView } />

            <Route render={ () => {
              return <h1 className="text-center">404 - Page Not Found!</h1>
            } } />

          </Switch>

          <Footer />

        </div>

      </Router>

    );
  }
}

const mapStateToProp = state => {
  let loadingState = false;
  // console.log(state)
  ((state.isLoading.isLoadingWeather) ||
    (state.isLoading.isLoadingChuck) ||
    (state.isLoading.isLoadingMovie)) ?
    loadingState = true :
    loadingState = false; // we will check all fetchings

  return {
    isLoading: loadingState
  }
}

export default connect(
  mapStateToProp,
  { fetch_movie_best_2018, fetch_movie_highest_rated, fetch_movie_most_popular }
)(App);

