import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom' 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' 
import { getAllUsers } from './service';
import Find from './components/Find'
import Users from './components/Users'


const App = () => {   

  const[users,setUsers]=useState([])

  useEffect(()=>{
    getAllUsers().then(res=>setUsers(res.data))
  },[])

  return (
    <Router>
      <nav>
        <Link to="/">Users</Link>
        <Link to="/find">Find</Link>
      </nav>      

      <Switch>
        <Route exact path="/">
          <Users users={users}/>
        </Route>
        <Route path="/find">
          <Find users={users} setUsers={setUsers}/>
        </Route>
      </Switch> 

      
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)