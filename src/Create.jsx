import React from 'react'
import { useState } from 'react';
import Usefetch from './Usefetch';
import { useNavigate } from 'react-router-dom';

const Create = () => {

   const [title, setTitle] = React.useState('');
   const [content, setContent] = React.useState('');
   const [author, setAuthor] = React.useState('');
   const [isPending, setIsPending] = React.useState(false);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
     e.preventDefault();
     const blog = { title, content, author };

        fetch('https://68972041250b078c20410a01.mockapi.io/notes/database/users', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(blog)
     })
     .then(() => {
       setIsPending(false);
       navigate('/'); 
     });
   }

  return (
    <div className="create-form-container">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" onChange={(e)=> setTitle(e.target.value)} name="title" required />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" required onChange={(e)=> setContent(e.target.value)}></textarea >
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" required onChange={(e)=> setAuthor(e.target.value)} />
        </div>
        {isPending && <p>Creating post...</p>}
        {!isPending && <button type="submit">Create Post</button>}
      </form>
    </div>
  )
}

export default Create
