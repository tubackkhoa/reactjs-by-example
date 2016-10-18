import React from 'react'

import UserDetail from './UserDetail'

const User = ({ params: { id }, location: { query } }) => (
  <div>
    <h3>User {id}</h3>                            
    <UserDetail user={query} />    
  </div>
)

export default User