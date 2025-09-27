import React from 'react'
import Navbar from './Navbar'
import Blogprop from './Blog-props'
import Home from './Home'
import { Routes, Route } from "react-router-dom"
import Blogdetail from './Blogdetail'
import Create from './Create'
import { NoteProvider } from './NoteContext'
import Favorites from './favorites'

const App = () => {
  return (
      <NoteProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blogdetail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </NoteProvider>
  )
}

export default App


