import React from 'react'
import { Link } from 'react-router-dom'
import { useNotes } from './NoteContext'


const Blogprop = ({note, title}) => {
  const { notes: favoriteNotes, addNote } = useNotes();
  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">{title}</h2>
      <div className="blog-cards">
        {note.map((n) => {
          const isFav = favoriteNotes.some(f => f.id === n.id);
          return (
            <div key={n.id} className="blog-card">
              <Link to={`/blog/${n.id}`} className="blog-card-link">
                <h3 className="blog-card-title">{n.title}</h3>
                <span className="blog-card-author">{n.author}</span>
              </Link>
              <button
                className={`blog-fav-btn${isFav ? ' favorited' : ''}`}
                onClick={() => !isFav && addNote(n)}
                disabled={isFav}
              >
                {isFav ? 'Favorited' : 'Add to Favorites'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blogprop;