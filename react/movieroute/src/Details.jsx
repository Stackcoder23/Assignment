import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Details = (props) => {
    const { state } = useLocation();
    return (
        <>
        <div className='card'>
            <img height="500px" src={state.data.image} alt="" />
                <h1>{state.data.name}</h1>
                <h3>Director : {state.data.director}</h3>
        </div>
        </>
    )
}

export default Details;