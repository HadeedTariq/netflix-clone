import React from 'react'
import {SideBar,MovieSection} from './'
import '../Css/Home.css'
function Home() {
  return (
    <>
      <div className="home">
        <div className="left-bar">
        <div className="left">
          <SideBar/>
        </div>
        </div>
        <div className="right">
          <MovieSection category='popular' title={'Popular'} showType='movie'/>
          <MovieSection category='upcoming' title={'Upcoming'} showType='movie'/>
          <MovieSection category='now_playing' title={'Top Rated'} showType='movie'/>
          <MovieSection category='top_rated' title={'Now Playing'} showType='movie'/>
        </div>
      </div>
    </>
  )
}

export default Home