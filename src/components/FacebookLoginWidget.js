import React from 'react'
import FacebookLogin from 'react-facebook-login'
import CircleImageLinkWidget from './CircleImageLinkWidget'
import config from '../config/config.js'

function renderLoggedoutHTML(callback) {
  return <FacebookLogin
         appId={config.FB_APP_ID}
         autoLoad={true}
         callback={callback} />
}

function renderLoggedInHTML(userId, avatar) {
  return <CircleImageLinkWidget
    link={`${config.FB_BASE}${userId}`}
    src={avatar}
    alt="facebook avatar" />
}

export default ({
  callback, isLoggedIn = false, userId = null, avatar = config.FB_DEFAULT_AVARTAR_URL
}) => {
  return isLoggedIn ? renderLoggedInHTML(userId, avatar) : renderLoggedoutHTML(callback)
}
