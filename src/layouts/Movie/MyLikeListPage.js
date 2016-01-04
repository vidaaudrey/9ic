import React from 'react'
import MyLikeListContainer from '../../containers/MyLikeListContainer'
export default ({
  params
}) => {
  return (
    <div className="container" id="movie-list-container">
        <MyLikeListContainer isLike={params.isLike} />
    </div>
  )
}
