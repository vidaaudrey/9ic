import React from 'react'
import CrumbWidget from './CrumbWidget'
import MovieItemHeaderWidget from './MovieItemHeaderWidget'
import MovieItemBodyWidget from './MovieItemBodyWidget'
import ReviewListWidget from './ReviewListWidget'
import AddReviewFormWidget from './AddReviewFormWidget'
export default () => {
  return (
    <div className="movie-item">
        <CrumbWidget/>
        <MovieItemHeaderWidget/>
        <MovieItemBodyWidget/>
        <ReviewListWidget/>
        <AddReviewFormWidget/>
    </div>
  )
}
