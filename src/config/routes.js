import React from 'react'
import {
  Route, IndexRoute
}
from 'react-router'
import Main from '../layouts/MainPage/Main'
import Home from '../layouts/MainPage/HomePage'
import GenreListPage from '../layouts/Genre/GenreListPage'
import MovieListPage from '../layouts/Movie/MovieListPage'
import MovieItemPage from '../layouts/Movie/MovieItemPage'

export default (
  <Route path="/" component={Main}>
    <Route path="movie/" component={MovieListPage} >
        // <Route path="movie/:id" component={MovieListPage} />
    </Route>
        <Route path="item/" component={MovieItemPage} />
    <Route path="genre/" component={GenreListPage} />
    <IndexRoute component={Home}/>
  </Route>
)
