
import React from 'react'

import Nav from './Nav'
import Footer from './Footer'


export default ({ children, history }) => {
  return (
    <div className="main">
        <Nav history={history} />
        <main>
            {children}
        </main>
        <Footer/>
    </div>
    )
}


