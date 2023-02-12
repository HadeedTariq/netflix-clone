import { Link } from 'react-router-dom'
import '../Css/Home.css'
import '../App.css'
function Movies({movies:{poster_path,title,original_name},imgUrl}) {
  // console.log(backdrop_path)
  return (
    <>
    <Link className='nav-link' to={`/movieDetails/${poster_path}/${title?title:original_name}`}>
    <div className="movie">
      <img src={`${imgUrl}/${poster_path}`} alt="" />
      <h4>{title?title:original_name}</h4>
    </div>
    </Link>
    </>
  )
}

export default Movies