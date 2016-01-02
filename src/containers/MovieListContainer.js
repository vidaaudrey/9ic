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
      isLoading: true,
      isSearch: false,
      keywords: ''
    }
  }
  componentDidMount() {
    this.init(this.props)
  }

  // since this container is shared between multiple routes (currently category and search route),
  // when the route changes, we'll have to get the new data
  componentWillReceiveProps(nextProps) {
    console.log('props changing', nextProps)
    this.setState({
      movies: [],
      isLoading: true,
    })
    this.init(nextProps)
  }

  init(props) {
    // console.log('props', this.props.filter, this.props)
    // both search and categories (popular, top_rated, upcoming...) share the same MovieList page
    // the only difference is the URL, so we structured the param word to be different
    // Search route: http://localhost:3000/#/search/hello
    // Category route: http://localhost:3000/#/movies/upcoming

    let filter = 'popular'
    let moviesPromise
    console.log('keywords', props.filter.keywords)
    if (props.filter.keywords) {
      filter = props.filter.keywords
      moviesPromise = apiTMDB.getMoviesByKeywords(filter)
    } else if (props.filter.category) {
      filter = props.filter.category
      moviesPromise = apiTMDB.getMoviesByCategory(filter)
    }
    // console.log('true filter: ', filter)
    moviesPromise
      .then(function (data) {
        this.setState({
          movies: data.results,
          isLoading: false,
          keywords: props.filter.keywords || '',
          isSearch: props.filter.keywords !== undefined
        })
      }.bind(this))
  }

  render() {
    return <MovieListWidget
      movies = { this.state.movies }
      history={this.props.history}
      isLoading={this.state.isLoading}
      isSearch ={this.state.isSearch}
      keywords={this.state.keywords} />
  }
}

MovieListContainer.propTypes = {
  filter: PropTypes.object
}
