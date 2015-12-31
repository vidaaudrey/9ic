import React, {
  Component
}
from 'react'
import apiTMDB from '../../helpers/apiTMDB'
import common from '../../helpers/common'
import _ from 'lodash'

export default class GenreListItem extends Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      poster: 'http://lorempixel.com/340/510/people'
    }
  }

  componentDidMount() {
    apiTMDB.getMoviesByGenreId(this.props.id)
      .then(function (data) {
        // pick a random image as the poster for the genere
        const randomIndex = _.random(data.results.length - 1)
        // get the poster image's url
        const posterURL = common.getPosterURLByMovie(data.results[randomIndex])
        this.setState({
          poster: posterURL
        })
      }.bind(this))
  }

  render() {
    return ( < div className = "col-xs-6 col-md-4 card-small" >
      < a href = "#"
      className = "thumbnail" >
      < img src = {
        this.state.poster
      }
      alt = {
        this.props.name
      }
      /> < div className = "caption text-center" > < h3 > {
        this.props.name
      } < /h3> < /div > < /a> < /div >
    )
  }
}
