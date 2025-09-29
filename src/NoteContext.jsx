import React, { createContext, useState, useContext } from 'react';
import Usefetch from './Usefetch';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
const [notes, setNotes] = useState([]);


  // Add note (prevent duplicates)
  const addNote = (note) => {
    setNotes((prevNotes) => {
      const exists = prevNotes.some((n) => n.id === note.id);
      if (exists) {
        return prevNotes; // don't add duplicate
      }
      return [...prevNotes, note];
    });
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);
