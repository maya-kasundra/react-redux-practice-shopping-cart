const INIT_STATE = {
    carts:[]
  
};
export const cartReducer = (state=INIT_STATE, action)=>{
    // console.log(action);
    switch(action.type){
        
        case "Add_item" :
            // console.log(state);
            const itemIndex = state.carts.findIndex((item)=>{
                  return  item.id === action.payload.id
                   
            })
            console.log(itemIndex);
            
           
          

            return {
                ...state,
                carts:[...state.carts,action.payload]
            }
        default : 
            return state
        }
    }
    // console.log(cartReducer);
    
        