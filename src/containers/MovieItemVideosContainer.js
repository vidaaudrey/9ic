import React, {
  Component, PropTypes
}
from 'react'
import apiTMDB from '../helpers/apiTMDB'
import MovieItemVideosWidget from '../components/MovieItemVideosWidget.js'


export default class MovieItemContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    this.init(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.init(nextProps)
  }

  init(props) {
    // wait till we get a valid movie id, then we'll get the videos for that movie 
    if (props.id) {
      apiTMDB.getMovieVideosById(props.id)
        .then(function (data) {
          this.setState({
            videos: data.results
          })
          console.log(this.state.videos, data)
        }.bind(this))
    }
  }

  render() {
    return (
      <div>
        <MovieItemVideosWidget videos={ this.state.videos }/>
      </div>
    )
  }
}
