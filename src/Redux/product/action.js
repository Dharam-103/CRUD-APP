import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"
import axios from "axios";
export const productRequest=()=>{
    return {type:PRODUCT_REQUEST}
}

export const productFailure=()=>{
    return{type :PRODUCT_FAILURE}
}

export const getProductSuccess=(payload)=>{
    return{type:GET_PRODUCT_SUCCESS,payload}
}
export const postProductSuccess=()=>{
    return{type:POST_PRODUCT_SUCCESS}
}



export const addProduct=(userData)=>(dispatch)=>{

    dispatch(productRequest());
  axios.post("http://localhost:8080/products",userData)
   .then((res)=>{
    console.log(res)
    dispatch(postProductSuccess())
    dispatch(getProduct)
   })
   .catch((err)=>{
    console.log(err)
    dispatch(productFailure());
   })
}

export const getProduct=(param)=>(dispatch)=>{
      
    dispatch(productRequest());
    axios.get("http://localhost:8080/products",param)
    .then((res)=>{
        dispatch(getProductSuccess(res.data))
    })
    .catch((err)=>{
        console.log(err)
        dispatch(productFailure())
    })
}

export const DeleteProduct=(id)=>(dispatch)=>{
    
    dispatch(productRequest())
    axios.delete(`http://localhost:8080/products/${id}`)
    .then(()=> {
        dispatch(postProductSuccess())
        dispatch(getProduct())
    })
    .catch((err)=>{
        console.log(err)
        dispatch(productFailure())
    })
}



export const editProduct=(id,newData)=>(dispatch)=>{
       
    dispatch(productRequest())
    axios.patch(`http://localhost:8080/products/${id}`,newData)
    .then((res)=>{
        console.log(res)
        dispatch({type:PATCH_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        console.log(err);
        dispatch(productFailure())
    })

}

