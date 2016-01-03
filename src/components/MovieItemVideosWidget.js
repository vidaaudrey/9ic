import React from 'react'

function renderVideosHTML(videos) {
  if (videos.length < 1) {
    return null
  }
  return (
    videos.map((video, key) => (
      <div key={key}>
        <iframe  width = "100%"
        height = "400"
        src = {`http:\/\/www.youtube.com/embed/${video.key}?autoplay=0`} >
        < /iframe>
      </div>
    ))
  )
}
export default ({
  videos
}) => {
  return (
    <div className="movie-item-videos">
      {renderVideosHTML(videos)}
    </div>
  )
}
