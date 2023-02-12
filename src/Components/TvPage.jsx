import React from 'react'
import { useParams } from 'react-router-dom'
import MovieSection from './MovieSection'

function TvPage() {
    const {category,name}=useParams()
    console.log(category,name)
  return (
    <>
     <div className="movie-page">
        <MovieSection title={name} category={category} wrap='wrap' showType={'tv'} center='center'/>
     </div>
    </>
  )
}

export default TvPage