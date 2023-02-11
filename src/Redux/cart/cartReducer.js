
import { ADD_TO_CART } from "../actionTypes"

const initialState={
    cart:[],
}
export const cartReducer=(state=initialState,{type,payload})=>{
       
    switch(type){
        case ADD_TO_CART:
           const temp=state.cart.filter((el)=> el.id===payload.id)
            if(temp.length>0){
                alert("Item already in Cart");
                return state
            }else{
            
               return {...state,cart:[...state.cart,payload]}
            }

     default :
       return state
           
 }
}


