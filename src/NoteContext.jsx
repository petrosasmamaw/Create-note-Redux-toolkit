import React, { createContext, useState, useContext } from 'react';
import Usefetch from './Usefetch';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
const [notes, setNotes] = useState([]);
const { data, isPending, error } = Usefetch('https://68972041250b078c20410a01.mockapi.io/notes/database/users')

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
    <NoteContext.Provider value={{ notes, addNote, deleteNote,data, isPending, error }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);
