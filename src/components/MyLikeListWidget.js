import React from 'react'
import MyLikeListItemWidget from './MyLikeListItemWidget'
import NoContentWidget from './NoContentWidget'
import ExploreLinksWidget from './ExploreLinksWidget'
import {
  Link
}
from 'react-router'
import FacebookLoginContainer from '../containers/FacebookLoginContainer'


function renderHeaderLink(isLike) {
  if (isLike) {
    return <Link to={`/mylikelist/no`}> View No List</Link>
  }
  return <Link to={`/mylikelist/yes`}>View Yes List </Link>
}

function renderLikesHTML(likes) {
  if (likes.size < 1 || !likes) {
    return (
      <div>
            <NoContentWidget message="No liked movie yet" />
            <p> Check more: </p> <ExploreLinksWidget />
        </div>
    )
  }
  const likesHTML = (
    likes.map((like) => <MyLikeListItemWidget
 key={ like.id } {...like} />)
  )
  return (
    <div>
      <div className="flex-row-wrap">
        { likesHTML }
      </div>
    </div>
  )
}
// deal with deleteUICallback, remove UI first
export default ({
  likes, dislikes, isLike, isLoggedIn
}) => {
  const callToAction = (
      <div className="well well-lg">
        <h1> Log in or create an account to save your list </h1>
        <FacebookLoginContainer/>
        <small>Your data will be stored locally in your browser.</small>
      </div>
    )
  return (
    <div className="col-sm-12 col-md-12 my-like-list">
        <h1>My {isLike ? 'YES' :  'NO'} List</h1>
        {renderHeaderLink(isLike)}
        {isLike ? renderLikesHTML(likes) : renderLikesHTML(dislikes)}
        {isLoggedIn ? null : callToAction }
      </div>
  )
}
