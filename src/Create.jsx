import React,{useRef} from 'react'
import { useState } from 'react';
import Usefetch from './Usefetch';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const [isPending, setIsPending] = React.useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

   const handleSubmit = (e) => {
     e.preventDefault();
     
     if (titleRef.current.value.includes('@')) {
       setError(true);
       return;
     }
     else{
      setError(false)
      const blog = { title: titleRef.current.value, content: contentRef.current.value, author: authorRef.current.value };

        fetch('https://68972041250b078c20410a01.mockapi.io/notes/database/users', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(blog)
     })
     .then(() => {
       setIsPending(false);
       navigate('/');
     })
     .catch((err) => {
       setError('Failed to create post');
       setIsPending(false);
     });
     }
   }

  return (
    <div className="create-form-container">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" ref={titleRef} name="title" required />
        </div>
          {error && <p className="error">Title should not contain '@'</p>}
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" ref={contentRef} name="content" required></textarea >
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" ref={authorRef} name="author" required />
        </div>
        {isPending && <p>Creating post...</p>}
        {!isPending && <button type="submit">Create Post</button>}
        <button type='reset' onClick={() => setError(false)}>Reset</button>
      </form>
    </div>
  )
}

export default Create
