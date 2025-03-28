import React, {useState, useEffect} from 'react'
import './banner.css'

import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'


function Banner() {

  const [movie, setMovie] = useState()
  
  useEffect(()=>{  
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
      
    })

  }, [])

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : "Movie Image"})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : "Movie Name"}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : "description"}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
