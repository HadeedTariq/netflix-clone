import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Global } from '../App'
import '../Css/MovieDetail.css'
function MovieDetail() {
    const{imgUrl}=useContext(Global)
    const {img,title}=useParams()
  return (
    <>
     <div className="movie-detail" style={{background:`url(${imgUrl}/${img})`,backgroundSize:"cover",opacity:"0.8"}}>
        <div className="detail-container">
          <img className='img-logo' src={`${imgUrl}/${img}`} alt="" />
        <div className="detail">
            <h1>{title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, architecto autem. Delectus amet incidunt illo numquam harum pariatur quas animi debitis. Ratione blanditiis placeat repellat eos. Repellat ipsam asperiores laboriosam</p>
        </div>
        </div>
     </div>
    </>
  )
}

export default MovieDetail