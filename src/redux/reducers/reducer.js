const INIT_STATE = {
    carts:[]
  
};
export const cartReducer = (state=INIT_STATE, action)=>{
    // console.log(action);
    switch(action.type){
        
        case "Add_item" :
          

        const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex >= 0){
            state.carts[IteamIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

          

            case "remove_item":
                const data = state.carts.filter((ele)=> ele.id !== action.payload)
                return {
                    ...state,
                    carts:data

                }

                case 'remove_one':
                    const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
            if(state.carts[IteamIndex_dec].qnty >= 1){
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts,dltiteams]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload.id);

                return {
                    ...state,
                    carts:data
                }
            }
            break;
        default : 
            return state
        }
    }
    
    // console.log(cartReducer);
    
        