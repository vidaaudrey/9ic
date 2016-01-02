import React from 'react'
import MovieListItemWidget from './MovieListItemWidget'
import PagerWidget from './PagerWidget'

export default ({ movies }) => {

  return (
    <div className="col-sm-12 col-md-12 movie-list">
        <PagerWidget/>
        {
            movies.map((movie) => <MovieListItemWidget key={ movie.id } {...movie} />)
        }
    </div>
    )
}
