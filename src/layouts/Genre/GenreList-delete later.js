import React, {
  Component
}
from 'react'
import GenreListItem from './GenreListItem'
import apiTMDB from '../../helpers/apiTMDB'

export default class GenreList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      genre: []
    }
  }

  componentDidMount() {
    this.init()
  }

  init() {
    apiTMDB.getGenre()
      .then(function (data) {
        this.setState({
          genre: data.genres
        })
      }.bind(this))
  }

  render() {
    return ( < div className = "row text-center" >
      < h4 > Movie Genre < /h4> < div className = "container "
      id = "genre-list" > {
        this.state.genre.map((gen) => ( < GenreListItem key = {
            gen.id
          } {...gen
          }
          />
        ))
      } < /div> < /div >
    )
  }
}
