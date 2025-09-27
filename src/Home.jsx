import React from 'react'
import Blogprop from './Blog-props'
import Usefetch from './Usefetch'
import { useNotes } from './NoteContext'
    
const Home = () => {
    const{data: note, isPending, error} = useNotes();

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {note && <Blogprop note={note} title={"Blog Posts"}/>}
    </div>
  )
}

export default Home
