import React from 'react'
import './tvshow.css'


var x223='hello';
console.log(x223)
function Card({img}) {
  return (
    <>
    <div>
    <img src={img} alt="Poster" className='post'/>
    </div>
    </>
  )
}

function Row({title}) {
        
  return(
  
    <>
    <div>{title}</div>
    <div className='c1'>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    <Card img={"https://www.dvdsreleasedates.com/posters/800/O/Oppenheimer-2023-movie-poster.jpg"} className='card'/>
    </div>
    </>
   
   
  )
}
console.log(x223);
function Tvshows() {
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
      let q= document.getElementById("mname");
         q.innerHTML=json.results[1].title;
          let p= document.getElementById("info");
          p.innerHTML=json.results[1].overview;
          x223= json.results[1].poster_path;
          console.log(x223)
         
         
    })
    .catch(err => console.error('error:' + err));
    
    return (
      <>
      <div className='banner'> 
           <h1 id='mname'>Movie name</h1>
           <div className='edit'>
           <h4 id='info'>This is home officially</h4>
           </div>
      </div>
         <div className='tvs'>
        <Row title={"Trending Now"}/>
        <Row title={"Movies"}/>
        <Row title={"Tv Shows"}/>
        <Row title={"Drama"}/>

    </div>
      </>
  )
}

export default Tvshows