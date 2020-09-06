import React from 'react';

const Forma = ({str})=>{
    return (
        <form>
            <input type="text"/>
            <input type="submit" value={str}/>
        </form>
    )
}

export default Forma 