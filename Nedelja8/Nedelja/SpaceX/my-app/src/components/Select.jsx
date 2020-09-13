import React from 'react'
import { getLaunchesByYear } from './../services'

const Select = ({setLaunches})=>{
    let output = ()=>{
        let years = []
        let d = new Date
        let year = d.getFullYear()
        for(let i=2006; i<=Number(year); i++) 
            years.push(i) 
            
        return years
    }
     
    return(
         <select onChange={(e)=>getLaunchesByYear(e.target.value).then(res=>setLaunches(res.data))}>
            <>
            { output().map(y => <option value={y}> {y} </option>) }
            </>
       </select>
    )
}

export default Select