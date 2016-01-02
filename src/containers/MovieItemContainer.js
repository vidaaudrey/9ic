import React, { Component } from 'react'
import apiTMDB from '../helpers/apiTMDB'
import MovieItemWidget from '../components/MovieItemWidget.js'

export default class MovieItemContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }
  componentDidMount() {
    this.init()
  }

  init() {
    apiTMDB.getMovie(this.props.params.id)
      .then(function (data) {
        this.setState({
          movie: data
        })
        console.log(data)
      }.bind(this))
  }

  render() {
    return (
    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 movie-item">
      <MovieItemWidget movie={ this.state.movie }/>
    </div>
  )
  }
}
