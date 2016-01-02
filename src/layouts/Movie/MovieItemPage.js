
import React from 'react'
import MovieItemContainer from '../../containers/MovieItemContainer'
export default ({ params }) => {
  return (
    <div className="container" id="movie-item-container">
        <MovieItemContainer params={params} />
    </div>
  )
}
