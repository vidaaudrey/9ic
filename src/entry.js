import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FacebookLogin from 'react-facebook-login'
import FacebookAvatarWidget from './components/FacebookAvatarWidget'

const responseFacebook = (response) => {
  console.log(response)
  ReactDOM.render( < FacebookAvatarWidget {...response
    }
    />, document.getElementById('facebook')
  )
}


ReactDOM.render(
  <FacebookLogin
    appId="965265460220101"
    autoLoad={true}
    callback={responseFacebook} />,
  document.getElementById('facebook')
)

// ReactDOM.render(<App />, document.getElementById('app'))
