
import React from 'react'
import MovieListContainer from '../../containers/MovieListContainer'
export default ({ params }) => {
  return (
    <div className="container" id="movie-list-container">
        <MovieListContainer filter={ params.cat }/>
    </div>
  )
}
