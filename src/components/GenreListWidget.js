import React from 'react'
import GenreListItemWidget from './GenreListItemWidget'

export default ({
  genre
}) => {
  return (
    <div className = "row text-center genre-list" >
    <h4> Movie Genre </h4>
    <div className = "container" id = "genre-list" > {
      genre.map((gen) => (
        < GenreListItemWidget key = { gen.id} {...gen}/>
      ))
      }
      </div>
    </div>
  )
}
