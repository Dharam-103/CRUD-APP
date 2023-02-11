import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes"

const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    token:""
}
const data=JSON.parse(localStorage.getItem("auth"))||initialState;
export const authReducer=(state=data,{type,payload})=>{

    switch(type){
        case LOGIN_REQUEST:{
            return{...state,isLoading:true}
        }
        case LOGIN_FAILURE:{
            return{...state,isLoading:false,isError:true}
        }
        case LOGIN_SUCCESS:{
            let temp={...state,isLoading:false,token:payload,isAuth:true,isError:false}
            localStorage.setItem("auth",JSON.stringify(temp))
            return{...state,isLoading:false,token:payload,isAuth:true}
        }

        default:
            return state
    }
}