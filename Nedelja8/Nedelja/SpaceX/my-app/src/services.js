import axios from 'axios'

export const getAllLaunches = ()=>{
    return axios.get("https://api.spacexdata.com/v3/launches")
}

export const getInfo = ()=>{
    return axios.get("https://api.spacexdata.com/v3/info")
}

export const getLaunchesByYear = (y)=>{
    return axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${y}`)
}