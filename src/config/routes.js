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
import MyLikeListPage from '../layouts/Movie/MyLikeListPage'
import DemoListPage from '../layouts/MainPage/DemoListPage'

export default (
  <Router history={browserHistory}>
        <Route path="/" component={Main}>

            <Route path="movies/:category" component={MovieListPage} >
            </Route>
            <Route path="search/:keywords" component={MovieListPage} >
            </Route>
            <Route path="movie/:id" component={MovieItemPage} />
            <Route path="mylikelist/:isLike" component={MyLikeListPage} />

            <Route path="demo/:isLike/:isList" component={DemoListPage} />

            <Route path="genre/" component={GenreListPage} />
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
