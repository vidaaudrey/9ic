import React, {
  Component, PropTypes
}
from 'react'
import LikeButtonsWidget from '../components/LikeButtonsWidget'
import config from '../config/config'
import store from '../store/store'

export default class LikeButtonsContainer extends Component {
  static defaultProps = {
    id: 140607,
    title: 'Star Wars: The Force Awakens',
    poster: `${config.TMDB_IMAGE_BASEURL}w500/fYzpM9GmpBlIC893fNjoWCwE24H.jpg`
  }
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  likeCallback(event, isLike = true) {
    event.preventDefault()
    const actionType = isLike ? 'LIKE' : 'DISLIKE'

    store.dispatch({
      type: actionType,
      id: this.props.id,
      title: this.props.title,
      poster: this.props.poster
    })
    return false
  }
  dislikeCallback(event) {
    // must prevent here, otherwise the page will flash or direct to other page
    event.preventDefault()
    this.likeCallback(event, false)
  }
  render() {
    return (
      <LikeButtonsWidget
        id={this.props.id}
        likeCallback={this.likeCallback.bind(this)}
        dislikeCallback={this.dislikeCallback.bind(this)}
     />
    )
  }
}
