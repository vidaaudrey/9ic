import React from 'react'
import apiMisc from '../helpers/apiMisc'
import config from '../config/config'
import store
from '../store/store'
import FacebookLoginWidget from '../components/FacebookLoginWidget'
import {
  facebookLoginPopUp
}
from '../helpers/apiFirebase'

export default class FacebookLoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: store.getState().get('userId') || null,
      isLoggedIn: store.getState().get('isLoggedIn') || false,
      avatar: config.FB_DEFAULT_AVARTAR_URL
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      if (store.getState().get('isLoggedIn')) {
        this.setState({
          isLoggedIn: true,
          userId: store.getState().get('userId'),
          avatar: store.getState().get('avatar')
        })
      } else {
        this.setState({
          isLoggedIn: false,
          userId: store.getState().get('userId') || null,
          avatar: config.FB_DEFAULT_AVARTAR_URL
        })
      }
    })
  }
  componentWillUnmount() {
    store.subscribe()
  }

  render() {
    return <FacebookLoginWidget
      callback={facebookLoginPopUp}
      userId={this.state.userId}
      avatar={this.state.avatar}
      isLoggedIn={this.state.isLoggedIn} />
  }
}
