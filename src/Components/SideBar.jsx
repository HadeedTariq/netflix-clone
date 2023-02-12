import React from 'react'
import {category} from '../utils/component' 
import MovieCategory from './MovieCategory'
function SideBar() {
  return (
    <>
     {
      category.map((cat,index)=>{
       return <div className="category" key={index}>
         <MovieCategory name={cat.name} category={cat.target}/>
        </div>
      })
     }
    </>
  )
}

export default SideBar