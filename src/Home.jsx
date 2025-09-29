import React from 'react'
import Blogprop from './Blog-props'
import Usefetch from './Usefetch'

    
const Home = () => {
const { data, isPending, error } = Usefetch('https://68972041250b078c20410a01.mockapi.io/notes/database/users')

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
  {data && <Blogprop note={data} title={"My notes"}/>}
    </div>
  )
}

export default Home
