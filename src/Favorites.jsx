import React from 'react'
import { Link } from 'react-router-dom'
import { useNotes } from './NoteContext'

const Favorites = () => {
    const { notes: favoriteNotes, deleteNote } = useNotes();
  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">Favorite Notes</h2>
      <div className="blog-cards">
        {favoriteNotes.map((note) => (
          <div key={note.id} className="blog-card">
            <Link to={`/blog/${note.id}`}>
              <h3 className="blog-card-title">{note.title}</h3>
              <span className="blog-card-author">{note.author}</span>
            </Link>
            <button onClick={() => deleteNote(note.id)}>Remove from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
