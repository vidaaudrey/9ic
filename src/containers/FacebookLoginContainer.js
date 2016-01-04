import React from 'react'
import apiMisc from '../helpers/apiMisc'
import config from '../config/config'
import store
from '../store/store'
import FacebookLoginWidget from '../components/FacebookLoginWidget'


export default class FacebookLoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: store.getState().get('userId') || null,
      isLoggedIn: store.getState().get('isLoggedIn') || false,
      avatar: config.FB_DEFAULT_AVARTAR_URL
    }

    // subscribe to user login and logout events and udpate accordingly(for now, we are just dealing with logout event)
    store.subscribe(() => {
      if (store.getState().get('isLoggedIn')) {
        this.setState({
          isLoggedIn: true
        })
      }
    })
  }

  // when user click login, this function will be called 
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
    // get remote avatar url and add that url to the store 
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
            userId={this.state.userId}
            isLoggedIn={this.state.isLoggedIn}
            avatar={this.state.avatar}
            callback={this.callback.bind(this)} />
      </div>
    )
  }
}
