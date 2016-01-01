import React from 'react'
import { Link } from 'react-router'

export default ({ image = '', placeholder = '300x300', targetLinkPath = '/', targetLinkText = '' }) => {
  return (
     <div className="col-sm-12 col-md-6 poster-image">
         <Link to={ targetLinkPath }>
            <img src={ image || `./assets/placeholder${ placeholder }.png` } alt={ `image for ${ targetLinkText }`}/>
         </Link>
     </div>
  )
}
