import React from 'react'
import {Link, IndexLink} from 'react-router'

// this is the children of Users
const UsersIndex = () => (
  <div>
    <h3>User List Here</h3>
    <ul className="list-group">
        <li className="list-group-item">
          <Link to="/users/ryan?name=nmtnmt">ryan</Link>
        </li>
    </ul>              
  </div>

)

export default UsersIndex