import React, { useState } from 'react'
import Actor from './Actors';
import Show from './Show';


const Search = () => {

    const [actor, setActor] = useState(false);
    const [show, setShow] = useState(false);

    const setActorFilter = () => {
        setShow(false);
        setActor(true);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
       
    }
    
    return (
        <>
            <section className="mt-6" style={{ marginTop:'20px',padding:'20px',backgroundRepeat:'no-repeat',width:'300px',opacity:'80%',marginLeft:'10px',color:'white',borderRadius:'25px'}}>
               
                        <h6>Choose Favourite Category</h6>

                            <input type="radio" name="movie" onChange={() => setActorFilter()} />  BY ACTOR 
                            <input type="radio" name="movie" onChange={() => setShowFilter()} className="ms-4" />  BY SHOWS 
                        
            </section>
            {actor ? <Actor /> : ""}
            {show ? <Show /> : ""}
        </>
    )
}

export default Search