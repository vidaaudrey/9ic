import React from 'react'

// if the text is not supplied, we'll return '', later will also add overflow wrapping for paragraph
export default ({ maxLen = 100, text }) => {
  return (
    <div className = "movie-short-intro" >
        <p> { text && text.substr(0, maxLen) || '' } </p>
    </div>
  )
}
