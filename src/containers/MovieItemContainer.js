import React, { Component } from 'react'
// import apiTMDB from '../helpers/apiTMDB'
import MovieItemWidget from '../components/MovieItemWidget.js'

export default class MovieItemContainer extends Component {

  render() {
    return (
    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 movie-item">
      <MovieItemWidget/>
    </div>
  )
  }
}
