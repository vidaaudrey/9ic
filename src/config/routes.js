import React from 'react';
import {
  Route, IndexRoute
}
from 'react-router';
import Home from '../layouts/MainPage/Home';
import Main from '../layouts/MainPage/Main';
import Movie from '../layouts/Movie/Movie';
import GenreList from '../layouts/Genre/GenreList';

export default ( < Route path = "/"
  component = {
    Main
  } >
  < Route path = "movie/:id"
  component = {
    Movie
  }
  /> < Route path = "genre/"
  component = {
    GenreList
  }
  /> < IndexRoute component = {
    Home
  }
  /> < /Route>
);
