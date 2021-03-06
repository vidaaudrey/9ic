import React, {
  Component
}
from 'react'
import store from '../store/store'
import NavUserWidget from '../components/NavUserWidget'

export default class NavUserContainer extends Component {

  constructor(props) {
    super(props)
    const userId = store.getState().get('userId') || null
    this.state = {
        isLoggedIn: userId !== null
      }
      // listen to the store update, if there is a user set, update the state 
    console.log('user logged in?', userId, this.state.isLoggedIn)
    store.subscribe(() => {
      if (store.getState().get('userId') !== null) {
        this.setState({
          isLoggedIn: true
        })
      } else {
        this.setState({
          isLoggedIn: false
        })
      }
    })
  }

  render() {
    return (
      <NavUserWidget isLoggedIn={this.state.isLoggedIn} />
    )
  }
}
