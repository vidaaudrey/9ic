
import React, { Component } from 'react'

import Nav from './Nav'
import Footer from './Footer'

export default ({ children, history }) => {
  return (
    <div className="main">
      <Nav/>
        <main>
          {children}
        </main>
      <Footer/>
    </div>
  )
}


