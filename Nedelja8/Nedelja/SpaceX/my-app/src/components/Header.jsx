import React,{useEffect, useState} from 'react'
import { getInfo } from './../services.js'

const Header = ()=>{
    const [companyName, setCompanyName] = useState("")
    useEffect(()=>{getInfo().then(res=>setCompanyName(res.data.name))}, [])
    return (<div>{companyName}</div>)
}

export default Header