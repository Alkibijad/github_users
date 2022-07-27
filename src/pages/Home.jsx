import React from 'react'
import UserResults from '../components/users/UserResults'
import UsersSearch from './UsersSearch'

function Home() {
  return (
    <div>
      <UsersSearch/>
       <UserResults/>
      </div>
  )
}

export default Home