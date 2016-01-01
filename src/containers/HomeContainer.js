import React, { Component } from 'react'
// import apiTMDB from '../helpers/apiTMDB'
import ExploreLinksWidget from '../components/ExploreLinksWidget'
import MovieSearchWidget from '../components/MovieSearchWidget'

export default class HomeContainer extends Component {

  render() {
    return (
      <div>
        <ExploreLinksWidget/>
        <MovieSearchWidget history={this.props.history} />
      </div>
    )
  }
}
