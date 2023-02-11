import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes"
import axios from "axios";
export const loginSuccess=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}

export const loginRequest=()=>{
    return {type:LOGIN_REQUEST}
}

export const loginFailure=()=>{
    return{type:LOGIN_FAILURE}
}


export const login=(userInfo)=>(dispatch)=>{

    dispatch(loginRequest())
  return axios.post("https://reqres.in/api/login",userInfo)
    .then((res)=> {
        console.log(res)
        dispatch(loginSuccess(res.data.token))
    })
    .catch((err)=> {
        console.log(err)
        dispatch(loginFailure())
    })
}