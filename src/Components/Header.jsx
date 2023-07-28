import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import redflix from '../assets/redflix.png'
import { ImSearch } from "react-icons/im";

function Header() {
  let a="";

  const url = 'https://api.themoviedb.org/3/trending/movie/day';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzlmMzk2NzY4MDY5YTRlM2QwOTQ0ZGZiYTBhZmE4YiIsInN1YiI6IjY0NWE0MGY0MTU2Y2M3MDBlMzllOWQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsulU6bYmZGwP1B9UmAOErl6CGekWAgEI3QfIcuWD9g'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json =>{
    a=json.results[1].overview
  })
  .catch(err => console.error('error:' + err));
  return (
    <div className="header">
      <div className="image">
      <Link to="/"><img src={redflix} alt="Logo"  className="logo"/></Link>
      </div>
      <nav className="navi">
           <Link to="/movies" className='l1'>Movies</Link>
           <Link to="/mylist" className='l1'>Mylist</Link>
           <Link to="/recent" className='l1'>Recent</Link>
           <Link to="/" className='l1'>Tvshows</Link>
           <ImSearch/>
      </nav>
     
    </div>
  )
}

export default Header