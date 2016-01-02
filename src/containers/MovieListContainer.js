import React, {
  Component, PropTypes
}
from 'react'
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
    // console.log('props', this.props.filter, this.props)
    // both search and categories (popular, top_rated, upcoming...) share the same MovieList page
    // the only difference is the URL, so we structured the param word to be different
    // Search route: http://localhost:3000/#/search/hello
    // Category route: http://localhost:3000/#/movies/upcoming

    let filter = 'popular'
    let moviesPromise
    if (this.props.filter.keyword) {
      filter = this.props.filter.keyword
      moviesPromise = apiTMDB.getMoviesByKeywords(filter)
    } else if (this.props.filter.category) {
      filter = this.props.filter.category
      moviesPromise = apiTMDB.getMoviesByCategory(filter)
    }
    // console.log('true filter: ', filter)
    moviesPromise
      .then(function (data) {
        this.setState({
          movies: data.results
        })
      }.bind(this))
  }

  render() {
    return <MovieListWidget movies = { this.state.movies } history={this.props.history} />
  }
}

MovieListContainer.propTypes = {
  filter: PropTypes.object
}
