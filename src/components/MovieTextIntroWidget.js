import React from 'react'

export default ({ maxLen = 100, text }) => {
  return (
    <div className = "movie-short-intro" >
        <p> { text && text.substr(0, maxLen) || '' } </p>
    </div>
  )
}
