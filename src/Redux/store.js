import { productReducer } from "./product/productReducer"
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { cartReducer } from "./cart/cartReducer";


const rootReducer=combineReducers({
    product:productReducer,
    auth:authReducer,
    cart:cartReducer,
});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))