import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes";


const initialState={
      isLoading:false,
      products:JSON.parse(localStorage.getItem("products")) ||[],
      isError:false,
}
export const productReducer=(state=initialState,{type,payload})=>{
     
    switch(type){
        case PRODUCT_REQUEST:{
            return {...state,isLoading:true}
        }
        case PRODUCT_FAILURE:{
            return{...state,isLoading:false,isError:true}
        }
        case GET_PRODUCT_SUCCESS:{
            localStorage.setItem("products",JSON.stringify(payload))
            return {...state,isLoading:false,products:payload}
        }
        case POST_PRODUCT_SUCCESS:{
            return{...state,isLoading:false}
        }
        case PATCH_PRODUCT_SUCCESS:{
            return{...state,isLoading:false}
        }
       
         default:
            return state;
    }
}