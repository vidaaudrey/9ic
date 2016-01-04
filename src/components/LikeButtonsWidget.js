import React from 'react'

export default ({
  likeCallback, dislikeCallback
}) => {
  return (
    <div className="like-buttons">
       <a href="#" className="btn btn-success" onClick={likeCallback} >Like</a>
       <a href="#" className="btn btn-danger" onClick={dislikeCallback} >Dislike</a>
   </div>
  )
}
