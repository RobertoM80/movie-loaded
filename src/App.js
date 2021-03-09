import { useCallback, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, updateActive } from "config/actions/movieActions";
import Header from "components/Header";
import Loader from "components/shared/Loader";
import Footer from "components/Footer";
import AllMoviesView from "components/views/AllMoviesView";
import MovieDetailsView from "components/views/MovieDetailsView";
import "css/App.css";

function App() {
  const moviesStatus = useSelector((state) => state.movies.status);
  const isLoading = ["pending", "idle"].includes(moviesStatus);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      dispatch(fetchMovies());
    } catch (error) {
      console.info(error);
    }
  }, []);

  useEffect(() => {
    const view = pathname.substr(1);
    dispatch(updateActive(view));
  }, [pathname]);

  return (
    <div className="App container-fluid">
      <Loader loading={isLoading} />

      <Header></Header>

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/popular" />;
          }}
        />

        <Route
          path={["/popular", "/rated", "/upcoming"]}
          component={AllMoviesView}
        />

        <Route path="/movie/details/:id" component={MovieDetailsView} />

        <Route
          render={() => {
            return <h1 className="text-center">404 - Page Not Found!</h1>;
          }}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

//       {/* <Route path="/movie/details/:id" component={movieDetailsView} /> */}
