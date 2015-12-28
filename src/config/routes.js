import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Home from '../components/MainPage/Home'
import Main from '../components/MainPage/Main'
import Movie from '../components/Movie/Movie'
import GenreList from '../components/Genre/GenreList'

export default (
    <Route path="/" component={Main}>
        <Route path="movie/:id" component={Movie} />
        <Route path="genre/" component={GenreList} />
        <IndexRoute component={Home}/>
    </Route>
)
