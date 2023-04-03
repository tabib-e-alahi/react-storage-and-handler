import React, { useEffect, useState } from 'react';
import Cosmetic from './Cosmetic';
// import { add, multiply } from '../utilities/calculate';
import './Cosmetics.css';
import { getTotal } from '../utilities/calculate';


const Cosmetics = () => {
   const [cosmetics,setCosmetics]=useState([])
   

    useEffect(  ()  =>  {
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))

    },[])

    const total= getTotal(cosmetics);
    
    return (
        <div>
            <h1>This is Cosmetics Components</h1>
            <p>Total money neede: {total}</p>
            <div className="products">
            {
                cosmetics.map(cosmetic=><Cosmetic 
                    key={cosmetic.id}
                    cosmetic={cosmetic}></Cosmetic>)
            }

            </div>


            {/* <p>Total  sale: {total}</p>
            <p>Total profit:{profit}</p> */}
        </div>
    );
};

export default Cosmetics;

