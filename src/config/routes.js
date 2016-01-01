import React from 'react'
import {
  Route, IndexRoute
}
from 'react-router'
import Home from '../layouts/MainPage/HomePage'
import Main from '../layouts/MainPage/Main'
import MovieListPage from '../layouts/Movie/MovieListPage'
import GenreListPage from '../layouts/Genre/GenreListPage'

export default (
  <Route path="/" component={Main}>
    <Route path="movie/" component={MovieListPage} >
        // <Route path="movie/:id" component={MovieListPage} />
    </Route>
    <Route path="genre/" component={GenreListPage} />
    <IndexRoute component={Home}/>
  </Route>
)
