import React from 'react'
import MovieListItemWidget from './MovieListItemWidget'
import PagerWidget from './PagerWidget'

export default () => {
  return (
    <div className="col-sm-12 col-md-12 movie-list">
        <PagerWidget/>
        <MovieListItemWidget/>
        <MovieListItemWidget/>
        <MovieListItemWidget/>
        <MovieListItemWidget/>
        <MovieListItemWidget/>
        <MovieListItemWidget/>
    </div>
    )
}
