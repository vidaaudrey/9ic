
import React from 'react'
import MovieSearchWidget from '../../components/MovieSearchWidget'

export default ({ history }) => {
  
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
          <li><a href="#/" className="active">Home</a></li>
          <li><a href="#/movies/popular/">Explore</a></li>
          <li><a href="#/genre/">Genre</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Login <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a href="#" className="active">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}


