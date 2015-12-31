import React from 'react'
import HomeContainer from '../../containers/HomeContainer'
export default () => {
  return (
    <div className="container" id="home">
        <div className="row vertical-align">
            <div className="col-xs-12 col-md-12 home-inner-box text-center">
                <HomeContainer/>
            </div>
        </div>
    </div>
  )
}
