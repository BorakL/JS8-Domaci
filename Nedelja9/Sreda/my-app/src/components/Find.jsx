import React from 'react'

const Find = ({users,setUsers}) => {
    const removeUser = (user)=>{
        let tmp = [...users]
        let index = tmp.findIndex(u=>u.id===user.id)
        tmp.splice(index,1)
        setUsers(tmp)

    }
    return (
        users.map(  u=> <p key={u.id}> {u.first_name} {u.last_name} <button onClick={(u)=>removeUser(u)}>Obriši korisnika</button></p>)
    )
  }

export default Find