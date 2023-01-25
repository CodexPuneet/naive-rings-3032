import * as types from "./actionType";

let AddToCart=payload=>dispatch=>{
    dispatch({type:types.ADD_TO_CART,payload:payload})
}
let DeleteFromCart=(id)=>dispatch=>{
    dispatch({type:types.DELETE_FROM_CART,payload:id})
}
let ResetCart=()=>dispatch=>{
    dispatch({type:types.RESET_CART})
}
let AddCartitems=(id)=>dispatch=>{
    dispatch({type:types.ADD_CART_ITEMS,payload:id})
}
let ReduceCartItems=(payload)=>dispatch=>{
    // dispatch({type:types.REDUCE_CART_ITEMS,payload:id})
}
export {AddToCart,DeleteFromCart,ResetCart,ReduceCartItems,AddCartitems}