import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItem=useSelector((store)=> {
    console.log(store)
     return store.cart.cart
  });
  console.log(cartItem)
  return (
    <div >
      <h1 style={{textAlign:"center",fontWeight:"bold",marginTop:"5rem"}}>ITEM IN CART</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2rem",margin:"auto",marginTop:"2rem"}}>
      {
       
        cartItem?.map((item)=>(
           <div key={item.id} style={{textAlign:"center"}}>
              <img src={item.image} alt="pic" style={{height:"400px",width:"100%"}}/>
              <p>{item.brand}</p>
              <p>{item.description}</p>
              <p>{item.gender}</p>
              <p>{item.price}</p>
           </div>
        
        ))
      
      }
      </div>
    </div>
  )
}

export default Cart;
