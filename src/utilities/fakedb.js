// use local-storage to manage card data

const addToDb=id=>{
    
    let shoppingCart;
    
    //get stored shopping cart from local storage to convert it into object again 
    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
    }
    else{
        shoppingCart={};
    }
    
    
    
    
    //add quantity into local storage and converting it into string
    const quantity=shoppingCart[id];
    if(quantity){
       const newQuantity=quantity+1;
       shoppingCart[id]=newQuantity;
   

    }else{
        shoppingCart[id]=1;
        
    }

    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
    
}

const removeFromDb= id =>{

    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
        }
    }

}

const deleteCart= ()=>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteCart
    };