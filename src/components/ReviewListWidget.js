import React from 'react'
import ReviewListItemWidget from './ReviewListItemWidget'

export default () => {
  return (
    <div className="row review-list">
        <h3>Reviews</h3>
        <ReviewListItemWidget/>
        <ReviewListItemWidget/>
        <ReviewListItemWidget/>
        <ReviewListItemWidget/>
   </div>
  )
}
