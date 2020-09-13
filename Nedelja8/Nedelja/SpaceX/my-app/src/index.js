import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import Launches from './components/Launches';
import { getAllLaunches } from './services';
import Header from './components/Header'
import Select from './components/Select'

const App = ()=>{

  const[launches,setLaunches] = useState([])

  useEffect(()=>{
    getAllLaunches().then((res)=>{setLaunches(res.data)})
  },[])

  return (
    <>
    <Header />
    <Select setLaunches={setLaunches}/>
    <Launches launches={launches} />
    </>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)