import React, {
  Component
}
from 'react'
import apiTMDB from '../helpers/apiTMDB'
import GenreListWidget from '../components/GenreListWidget'

export default class GenreListContainer extends Component {

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
    console.log('genre', this.state.genre)
    return (<GenreListWidget genre = {this.state.genre }/>)
  }
}
