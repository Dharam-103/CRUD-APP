import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProduct } from '../Redux/product/action'
import Loader from './Loader';
import ProductCard from './ProductCard';

const ProductList = () => {
 const dispatch=useDispatch();
 const[searchParams]=useSearchParams();
 const location=useLocation();

 const {product,loading,error}=useSelector((store)=> {
   return {
        product:store.product.products,
        loading:store.product.isLoading,
        error:store.product.isError
   }
 },shallowEqual)

 

 let obj= {
  params: {
      gender:searchParams.getAll("category"),
      _sort:searchParams.get("order") && "price",
      _order:searchParams.get("order")
  },
}


  useEffect(()=>{
    dispatch(getProduct(obj));
  },[location.search])

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2rem",margin:"auto",marginTop:"2rem"}}>
      {loading && <Loader/>}
      {error && <h1>...Error</h1>}
        {
          product.length>0 && product.map((el)=> (
            <ProductCard key={el.id} product={el}/>
          ))
        }
    </div>
  )
}

export default ProductList;
