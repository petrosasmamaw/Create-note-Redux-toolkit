import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Peter-note</h1>
      <div className="rightnav">
        <Link to="/"><button>Home</button></Link>
        <Link to="/create">
          <button>Create Note</button>
        </Link>
        <Link to="/favorites"><button>Favorites</button></Link>
      </div>

    </div>
  )
}

export default Navbar
