import React from 'react'
import MovieListContainer from '../../containers/MovieListContainer'
export default ({
  params, history
}) => {
  return (
    <div className="container" id="movie-list-container">
        <MovieListContainer filter={ params } history={history} />
    </div>
  )
}
