import React from 'react'
import { useState, useEffect } from 'react'


const Usefetch = (url) => {

   const [data, setData] = useState(null)
   const [isPending, setIsPending] = useState(true)
   const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if (!res.ok) throw Error('Could not fetch the data')
            return res.json()
        })
        .then((data) => {
            setData(data)
            setIsPending(false)
        })
        .catch((err) => {
            setError(err.message)
            setIsPending(false)
        })
    }, [url])
    return {data, isPending, error}

}

export default Usefetch
