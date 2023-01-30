import React, { useEffect, useState } from 'react'

function Home() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log(currentUser)
    if (currentUser){
      setCurrentUser(currentUser)
    }
  }, [])

  return (
    <div>
      <h1 className='text-center'> Home </h1>
      <h2>{currentUser?.name}</h2>
    </div>
  )
}

export default Home
