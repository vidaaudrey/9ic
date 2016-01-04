import React, {
  Component
}
from 'react'
import MyLikeListWidget from '../components/MyLikeListWidget.js'
import store from '../store/store'

export default class MyLikeListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      likes: store.getState().get('likes') || [],
      dislikes: store.getState().get('dislikes') || []
    }
    console.log('getting likes from store', this.state.likes)
  }

  render() {
    return (
      <MyLikeListWidget likes={this.state.likes}/>
    )
  }
}
