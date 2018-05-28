import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Loader from './components/shared/Loader';
import Footer from './components/Footer';
import NewsView from './components/views/NewsView';
import LatestView from './components/views/LatestView';
import './css/App.css';

class App extends Component {

  render() {
    return (

      <Router>

        <div className="App container-fluid">

          <Loader loading={ this.props.isLoading } />

          <Header></Header>

          <Switch>

            <Route exact path="/" component={ NewsView } />

            <Route path="/latest" component={ LatestView } />

          </Switch>

          <Footer />

        </div>

      </Router>

    );
  }
}

const mapStateToProp = state => {
  let loadingState = false;

  state.isLoading.isLoadingWeather ? loadingState = true : loadingState = false; // we will check all fetchings

  return {
    isLoading: loadingState
  }
}

export default connect(mapStateToProp, null)(App);
