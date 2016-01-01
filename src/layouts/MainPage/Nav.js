
import React, { Component } from 'react'

export default () => {
  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">MovTinder</a>
      </div>

      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <div className="pull-left slogan">
          <h4>Love movies, enjoy life</h4>
        </div>
        <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="movie name..."/>
            </div>
            <button type="submit" className="btn btn-default">Search</button>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#/" className="active">Home</a></li>
          <li><a href="#/movie/">Explore</a></li>
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


