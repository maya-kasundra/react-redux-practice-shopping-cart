// add to cart item function
export const Add =(item)=>{
    return{
        type:"Add_item",
        payload:item
    }
}
// remove items function
export const Remove =(id)=>{
    return{
        type:"remove_item",
        payload:id
    }
}


//remove individual item
export const rmv =(item)=>{
    return{
        type:"remove_one",
        payload:item
    }
}


