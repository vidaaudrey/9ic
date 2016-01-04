import React from 'react'
import MyLikeListItemWidget from './MyLikeListItemWidget'
import NoContentWidget from './NoContentWidget'
import ExploreLinksWidget from './ExploreLinksWidget'


function renderLikesHTML(likes) {
  if (likes.length < 1 || !likes) {
    return (
      <div>
            <NoContentWidget message="No liked movie yet" />
            <p> Check more: </p> <ExploreLinksWidget />
        </div>
    )
  }
  const likesHTML = (
    likes.map((like) => <MyLikeListItemWidget key={ like.id } {...like} />)
  )
  return (
    <div>
      <div className="flex-row-wrap">
        { likesHTML }
      </div>
    </div>
  )
}

export default ({
  likes
}) => {
  return (
    <div className="col-sm-12 col-md-12 my-like-list">
        <h1>My Like List</h1>
        {renderLikesHTML(likes)}
      </div>
  )
}
