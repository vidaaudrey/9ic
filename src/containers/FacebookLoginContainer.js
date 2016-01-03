import React from 'react'
import apiMisc from '../helpers/apiMisc'
import config from '../config/config'
import store from '../store/store'
import storeLogger from '../helpers/storeLogger'
import FacebookLoginWidget from '../components/FacebookLoginWidget'


export default class FacebookLoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        userId: null,
        isLoggedIn: false,
        avatar: config.FB_DEFAULT_AVARTAR_URL
      }
      // for debug purpose, add the store listen here to listen login/out events
    storeLogger()
  }

  callback(response) {
    store.dispatch({
      type: 'LOGIN',
      userId: response.id,
      username: response.name
    })
    this.setState({
      userId: response.id,
      isLoggedIn: true
    })

    // now user is logged in, we'll fetch the avatar info
    this.getAvatar(response.id)
  }

  getAvatar(userId) {
    apiMisc.getFBAvatar(userId)
      .then(data => {
        if (!data.is_silhouette) {
          this.setState({
            avatar: data.url,
          })
          store.dispatch({
            type: 'ADD_AVATAR',
            avatar: data.url
          })
        }
      })
  }

  render() {
    return (
      <div>
        <FacebookLoginWidget
            userId={this.state.username}
            isLoggedIn={this.state.isLoggedIn}
            avatar={this.state.avatar}
            callback={this.callback.bind(this)} />
      </div>
    )
  }
}
