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

    // how to not repeat this?
    this.state = {
      likes: store.getState().get('likes') || [],
      dislikes: store.getState().get('dislikes') || []
    }
  }

  componentDidMount() {
    // store.subscribe(() => {
    //   console.log('listening updates', store.getState().get('likes'))
    //   this.setState({
    //     likes: store.getState().get('likes') || []
    //   })
    //   this.setState({
    //     dislikes: store.getState().get('dislikes') || []
    //   })

    // below will not work!
    // this.setState = {
    //   likes: store.getState().get('likes') || [],
    //   dislikes: store.getState().get('dislikes') || []
    // }
    // })
  }

  componentWillUnmount() {
    // store.subscribe()
  }

  render() {
    return (
      <MyLikeListWidget likes={this.state.likes} dislikes={this.state.dislikes} isLike={this.props.isLike !== 'no'}/>
    )
  }
}
