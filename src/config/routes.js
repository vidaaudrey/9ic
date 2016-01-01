import React from 'react'
import {
  Router, Route, IndexRoute, browserHistory
}
from 'react-router'
import Main from '../layouts/MainPage/Main'
import Home from '../layouts/MainPage/HomePage'
import GenreListPage from '../layouts/Genre/GenreListPage'
import MovieListPage from '../layouts/Movie/MovieListPage'
import MovieItemPage from '../layouts/Movie/MovieItemPage'

            // <Route path="movie/:id" component={MovieListPage} />
export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="movies/:cat" component={MovieListPage} >
            </Route>
            <Route path="search/:keyword" component={MovieListPage} >
            </Route>
            <Route path="movie/:id" component={MovieItemPage} />
            <Route path="genre/" component={GenreListPage} />
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
