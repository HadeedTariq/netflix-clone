import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Home.css'
function MovieCategory({name,category}) {
  return (
    <>
      <Link to={`/movie/${category}/${name}`} style={{color:"white",textDecoration:"none"}}>
        <h3 id='category'>{name}</h3>
      </Link>
    </>
  )
}

export default MovieCategory