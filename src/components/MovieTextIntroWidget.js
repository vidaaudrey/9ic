import React from 'react'

export default ({ len = 20 }) => {
  let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur impedit earum quis necessitatibus error deleniti.'
  if (len > 30) {
    text = text + text + text + text + text
  }
  return (
    <div className = "movie-short-intro" >
        <p> { text } </p>
    </div>
  )
}
