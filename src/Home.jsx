import React, { useEffect } from 'react'
import Blogprop from './Blog-props'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNotes, selectAllNotes, selectIsLoading, selectError } from './noteSlice'

    
const Home = () => {
 const allNotes = useSelector(selectAllNotes);
 const isLoading = useSelector(selectIsLoading);
 const error = useSelector(selectError);
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(fetchNotes());
 }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {allNotes && <Blogprop note={allNotes} title={"My notes"}/>}
    </div>
  )
}

export default Home
