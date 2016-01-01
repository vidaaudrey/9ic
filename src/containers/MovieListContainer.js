import React, { Component, PropTypes } from 'react'
  // import apiTMDB from '../helpers/apiTMDB'
import MovieListWidget from '../components/MovieListWidget.js'
import apiTMDB from '../helpers/apiTMDB'

export default class MovieListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    this.init()
  }

  init() {
    console.log('props', this.props.filter)
    const filter = this.props.filter || 'popular'
    apiTMDB.getMovies(filter)
      .then(function (data) {
        this.setState({
          movies: data.results
        })
      }.bind(this))
  }

  render() {
    return < MovieListWidget movies={ this.state.movies } />
  }
}

MovieListContainer.propTypes = {
  filter: PropTypes.string
}
