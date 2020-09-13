import React from 'react'

const Launches = ({launches})=>{
    return(
        <>
        {launches.map(l => <p key={l.flight_number}>{l.mission_name}</p>)}
        </>
    )
}

export default Launches