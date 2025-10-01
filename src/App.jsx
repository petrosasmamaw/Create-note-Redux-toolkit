import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { Routes, Route } from "react-router-dom"
import Blogdetail from './Blogdetail'
import Create from './Create'
import Favorites from './favorites'

const App = () => {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blogdetail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        </>    
  )
}

export default App


