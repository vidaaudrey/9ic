import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FacebookLogin from 'react-facebook-login'



export const Faceboook = ({
  id
}) => {

  return (
    <div>
            <h3>Facebook {id}</h3>
            <img src="https://scontent.xx.fbcdn.net/hprofile-prn2/v/t1.0-1/c48.15.302.302/524763_224229834350958_924729254_n.jpg?oh=6883efb78870d0276dc4a7fddf831cfa&oe=5704F4AF" alt="Facebook Avatar"/>
        </div>
  )
}

const responseFacebook = (response) => {
  console.log(response)
  ReactDOM.render( < Faceboook {...response
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
