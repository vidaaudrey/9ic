import React, {Component} from 'react'

export default ({name}) => {
    return (
       <div className="col-xs-6 col-md-4 card-small">
           <a href="#" className="thumbnail">
               <img src="http://lorempixel.com/400/200/" alt="action" />
               <div className="caption text-center">
                   <h3>{name}</h3>
               </div>
           </a>
       </div>
    )
}