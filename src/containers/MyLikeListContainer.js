import React, {
  Component, PropTypes
}
from 'react'
import MyLikeListWidget from '../components/MyLikeListWidget.js'
import store from '../store/store'

export default class MyLikeListContainer extends Component {
  static propTypes = {
    isLike: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      likes: store.getState().get('likes') || [],
      dislikes: store.getState().get('dislikes') || []
    }
    console.log('getting likes from store', this.state.likes, this.props.isLike)
  }

  render() {
    return (
      <MyLikeListWidget likes={this.state.likes} dislikes={this.state.dislikes} isLike={this.props.isLike !== 'no'}/>
    )
  }
}
