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
      movies: [],
      isLoading: false,
      isSearch: false
    }
  }
  componentDidMount() {
    this.init(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('props changing', nextProps)
    this.state.movies = []
    this.init(nextProps)
  }

  init(props) {
    // console.log('props', this.props.filter, this.props)
    // both search and categories (popular, top_rated, upcoming...) share the same MovieList page
    // the only difference is the URL, so we structured the param word to be different
    // Search route: http://localhost:3000/#/search/hello
    // Category route: http://localhost:3000/#/movies/upcoming
    this.setState({
      isLoading: true
    })

    let filter = 'popular'
    let moviesPromise
    let isSearch = false;
    if (props.filter.keyword) {
      isSearch = true
      filter = props.filter.keyword
      moviesPromise = apiTMDB.getMoviesByKeywords(filter)
    } else if (props.filter.category) {
      filter = props.filter.category
      moviesPromise = apiTMDB.getMoviesByCategory(filter)
    }
    // console.log('true filter: ', filter)
    moviesPromise
      .then(function (data) {
        this.setState({
          isSearch: isSearch,
          movies: data.results,
          isLoading: false
        })
      }.bind(this))
  }

  render() {
    return <MovieListWidget movies = { this.state.movies } history={this.props.history} isLoading={this.state.isLoading} isSearch = {this.state.isSearch}/>
  }
}

MovieListContainer.propTypes = {
  filter: PropTypes.object
}
