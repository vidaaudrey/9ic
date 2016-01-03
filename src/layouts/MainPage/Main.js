import React from 'react'
import Nav from './Nav'
import FacebookLoginContainer from '../../containers/FacebookLoginContainer'


export default ({
  children, history
}) => {
  return (
    <div className="main">
        <FacebookLoginContainer id="893335047440430" />
        <Nav history={history} />
        <main>
            {children}
        </main>
    </div>
  )
}
