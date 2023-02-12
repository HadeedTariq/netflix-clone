import Movies from './Movies'
import '../Css/Home.css'
import { useEffect,useContext,useState } from 'react';
import {FetchData} from '../utils/FetchData'
import { Global } from '../App';
import { Link } from 'react-router-dom';
function MovieSection({title,category,wrap,center,showType}) {
  const {imgUrl}=useContext(Global)
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    let fetchContent = async () => {
      let data = await FetchData(`https://api.themoviedb.org/3/${showType}/${category}?api_key=df89e31c729e95f7d822e86c2840b1eb`)
      console.log(data)
      setMovie(data)
    }
    fetchContent()
  }, [category])
  return (
    <>
    <Link to={`${showType}/${category}/${title}`} className='nav-link'><h1 style={{fontWeight:"300" ,fontFamily:"serif",padding:"0 8px"}}>{title}</h1></Link>
    <div className="movies" style={{flexWrap:wrap,justifyContent:center}}>
        {
        movie.map((movies,index)=> 
        <div className="movieData" key={index}>
        <Movies movies={movies} imgUrl={imgUrl}/>
        </div>
        )
   }
    </div>
    </>
  )
}

export default MovieSection