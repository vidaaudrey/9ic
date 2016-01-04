import React from 'react'
import MovieSearchWidget from '../../components/MovieSearchWidget'
import FacebookLoginContainer from '../../containers/FacebookLoginContainer'
import {
  Link
}
from 'react-router'
import NavUserContainer from '../../containers/NavUserContainer'


export default ({
  history
}) => {
  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src="assets/logo.png" alt="Mindr"/>
        </a>
      </div>

      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <div className="pull-left slogan">
          <h4>Love movies, enjoy life</h4>
        </div>

        <MovieSearchWidget history={history} className="navbar-form navbar-left"/>

        <ul className="nav navbar-nav navbar-right">
          <li> <Link to = '/' className="active"> Home </Link></li>
          <li> <Link to = '/mylikelist/' > My List </Link></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Explore <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li> <Link to = '/movies/popular' > Popular </Link></li>
              <li> <Link to = '/movies/now_playing' > Now Playing </Link></li>
              <li> <Link to = '/movies/top_rated' > Top Rated </Link></li>
              <li> <Link to = '/movies/upcoming' > Upcoming </Link></li>
            </ul>
          </li>
          <NavUserContainer/>
          <li>
              <FacebookLoginContainer
/>
          </li>
        </ul>
      </div>
    </nav>
  )
}
