import React from 'react'
import store from '../store/store'
import {
  logOut
}
from '../helpers/apiFirebase'
export default ({
  isLoggedIn = false
}) => {
  return (
    <li className={`dropdown ${isLoggedIn ? 'show' : 'hide'}`}>
       <a href="#" className="dropdown-toggle" data-toggle="dropdown">Admin <b className="caret"></b></a>
       <ul className="dropdown-menu">
         <li><a href="#" className="active">Dashboard...</a></li>
         <li><a href="#/" onClick={() => {
            store.dispatch({
                type: 'LOGOUT'
            })
          logOut()
        }}>Logout</a></li>
       </ul>
    </li>
  )
}
