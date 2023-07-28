import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Tvshows from './Components/Tvshows'
import Movies from './Components/Movies'
import Recent from './Components/Recent'
import Mylist from './Components/Mylist'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Tvshows/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/mylist" element={<Mylist/>}/>
          <Route path="/recent" element={<Recent/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App