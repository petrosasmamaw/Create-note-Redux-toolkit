// Blogdetail.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import Usefetch from './Usefetch'
import { useNavigate } from 'react-router-dom'

const Blogdetail = () => {
  const { id } = useParams(); // get :id from the route
  const { data: blog, isPending, error } = Usefetch(`https://68972041250b078c20410a01.mockapi.io/notes/database/users/${id}`);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch(`https://68972041250b078c20410a01.mockapi.io/notes/database/users/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      navigate('/')

    });
  }

  return (
    <div className="blog-detail">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <>
          <h2>{blog.title}</h2>
          <p>By {blog.author}</p>
          <div className="blog-body">{blog.body}</div>
          <button onClick={() => handleDelete(blog.id)}>delete</button>
        </>
      )}
    </div>
  )
}

export default Blogdetail
