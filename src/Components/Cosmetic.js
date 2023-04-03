import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../utilities/fakedb';

const Cosmetic = (props) => {
    // console.log();
    const{name,price,id}=props.cosmetic;

    const addToCart=(id)=>{
        // console.log('item add',id);
        addToDb(id);
    }

    const removeFromCart=id=>{
        removeFromDb(id);
    }
    
    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>
            <p>Only for: {price}</p>
            <p>it has id : {id}</p>
            {/* <button onClick={addToCartWithParameter}>Add to cart</button> */}


            {/* shortcut */}
            <button onClick={()=>addToCart(id)}>Add to cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;