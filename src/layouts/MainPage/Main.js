import React from 'react'
import Nav from './Nav'


export default ({
  children, history
}) => {
  return (
    <div className="main">
        <Nav history={history} />
        <main>
            {children}
        </main>
    </div>
  )
}
