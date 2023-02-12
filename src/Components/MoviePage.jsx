import React from 'react'
import { useParams } from 'react-router-dom'
import MovieSection from './MovieSection'

function MoviePage() {
    const {category,name}=useParams()
    console.log(category,name)
  return (
    <>
     <div className="movie-page">
        <MovieSection title={name} category={category} wrap='wrap' showType={'movie'} center='center'/>
     </div>
    </>
  )
}

export default MoviePage