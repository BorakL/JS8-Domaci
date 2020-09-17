import React from 'react'

const Users = ({users}) => {
    return (
        users.map(  p=> <p key={users.id}> {users.first_name} {users.last_name} </p>)
    )
  }

export default Users