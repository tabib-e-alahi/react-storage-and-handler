const add=(first,second)=>{
    return first+second;
}
const multiply=(total,basePrice)=>{
    return total-basePrice;
}


const getTotalPrice= products=>{
    const reducer=(previous,current)=> previous+ current.price;
    const totala=products.reduce(reducer,0);
    return totala;
}
export  {
    add,
    multiply,
    //getTotalPrice ke getTotal name e send korlam
    getTotalPrice as getTotal
};