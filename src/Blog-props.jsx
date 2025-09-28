import React from 'react'
import { Link } from 'react-router-dom'


const Blogprop = ({note, title}) => {
  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">{title}</h2>
      <div className="blog-cards">
        {note.map((note) => (
          <div key={note.id} className="blog-card">
            <Link to={`/blog/${note.id}`} className="blog-card-link">
              <h3 className="blog-card-title">{note.title}</h3>
              <span className="blog-card-author">{note.author}</span>
            </Link>
            <button className="blog-fav-btn" onClick={() => addNote(note)}>Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogprop;