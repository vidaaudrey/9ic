import React from 'react'
import CrumbWidget from './CrumbWidget'
import MovieItemHeaderWidget from './MovieItemHeaderWidget'
import MovieItemBodyWidget from './MovieItemBodyWidget'
import ReviewListWidget from './ReviewListWidget'
import AddReviewFormWidget from './AddReviewFormWidget'

export default ({
  movie
}) => {
  console.log('movie', movie)

  return (
    <div className="movie-item">
        <CrumbWidget/>
        <MovieItemHeaderWidget {...movie} />
        <MovieItemBodyWidget {...movie} />
        <ReviewListWidget {...movie} />
        <AddReviewFormWidget {...movie} />
    </div>
  )
}
