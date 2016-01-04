import React, {
  Component,
  PropTypes
}
from 'react'

// this is an adapted version from https://www.npmjs.com/package/passport-facebook
export default class FacebookLogin extends Component {

  static propTypes = {
    callback: PropTypes.func.isRequired,
    appId: PropTypes.string.isRequired,
    xfbml: PropTypes.bool,
    scope: PropTypes.string,
    textButton: PropTypes.string,
    autoLoad: PropTypes.bool,
    size: PropTypes.string,
  }

  static defaultProps = {
    textButton: 'Login with Facebook',
    scope: 'public_profile, email, user_birthday',
    xfbml: false,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: this.props.appId,
        xfbml: this.props.xfbml,
        version: 'v2.3',
      })

      if (this.props.autoLoad) {
        FB.getLoginStatus(this.checkLoginState)
      }
    }
  }

  responseApi = (authResponse) => {
    FB.api('/me', (me) => {
      me.accessToken = authResponse.accessToken
      this.props.callback(me)
    })
  }

  checkLoginState = (response) => {
    if (response.authResponse) {
      this.responseApi(response.authResponse)
    } else {
      if (this.props.callback) {
        this.props.callback({
          status: response.status
        })
      }
    }
  }

  click = () => {
    FB.login(this.checkLoginState, {
      scope: this.props.scope
    })
  }

  render() {
    return (
      <div className="facebook-login-container">
        <a href='#' onClick={this.click}> Login with
          <i className="fa fa-facebook fa-2x"></i>
        </a>
        <div id="fb-root"></div>
      </div>
    )
  }
}
