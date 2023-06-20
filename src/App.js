import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieListPage from './MovieListPage';
import MovieDetailsPage from './MovieDetailsPage';
import Header from './Header';
import "./App.scss"

function App() {

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MovieListPage} />
          <Route path="/movies/:imdbID" component={MovieDetailsPage} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
