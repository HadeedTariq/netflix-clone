import React from 'react'
import {MovieSection} from './'
import '../Css/Home.css'
function Tv() {
  return (
    <>
      <div className="home">
        <div className="left-bar">
        {/* <div className="left">
          <SideBar/>
        </div> */}
        </div>
        <div className="right" style={{width:'100%'}}>
          <MovieSection category='popular' title={'Popular'} showType='tv'/>
          <MovieSection category='on_the_air' title={'Upcoming'} showType='tv'/>
          <MovieSection category='airing_today' title={'Top Rated'} showType='tv'/>
          <MovieSection category='top_rated' title={'Now Playing'} showType='tv'/>
        </div>
      </div>
    </>
  )
}

export default Tv