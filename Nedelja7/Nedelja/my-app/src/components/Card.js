import React from 'react';
import Emoji from './Card.js';
import Description from './Description.js';

const Card = ({url,description})=>{
    return (
        <>
        <Description url={url}/>
        <Emoji description={description} />
        </>
    )
}

export default Card