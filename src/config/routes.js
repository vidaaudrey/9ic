import React from 'react'
import {
  Route, IndexRoute
}
from 'react-router'
import Home from '../layouts/MainPage/HomePage'
import Main from '../layouts/MainPage/Main'
import Movie from '../layouts/Movie/Movie'
import GenreListPage from '../layouts/Genre/GenreListPage'

export default (
  <Route path="/" component={Main}>
    <Route path="movie/:id" component={Movie} />
    <Route path="genre/" component={GenreListPage} />
    <IndexRoute component={Home}/>
  </Route>
)
