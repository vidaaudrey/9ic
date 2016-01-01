import React from 'react'
import { Link } from 'react-router'

export default ({ image = './assets/placeholder300.png', targetLinkPath = '/', targetLinkText = '' }) => {
  return (
     <div className="col-sm-12 col-md-6 poster-image">
         <Link to={ targetLinkPath }>
            <img src={ image } alt={ `image for ${ targetLinkText }`}/>
         </Link>
     </div>
  )
}
