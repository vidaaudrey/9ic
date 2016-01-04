import React from 'react'
export default () => {
  return (
    <div className='crumb'>
        <ol className="breadcrumb">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Movies</a>
            </li>
            <li className="active">Jurassic World </li>
        </ol>
    </div>
  )
}
