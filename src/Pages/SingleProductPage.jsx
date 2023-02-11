import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { shallowEqual, useSelector} from "react-redux";
import Loader from '../Components/Loader';
const SingleProductPage = () => {
  const {id}=useParams();
  const[single,setSingle]=useState({});
  const {data,loading,error}=useSelector((store)=> {
    console.log(store)
    return {
      data:store.product.products,
      loading:store.product.isLoading,
      error:store.product.isError,
    }
  },shallowEqual)
  console.log(data)

  useEffect(()=>{
     let out=data.find((el)=> el.id===+id);
     console.log(out)
     out && setSingle(out);
  },[])

  
    
  return (
    <div>
        <h1 style={{textAlign:"center",fontWeight:"bold",fontSize:"3rem"}}>Single Product Page</h1>
        {loading && <Loader />}
        {error && <h1>...Error</h1>}
        <div style={{border:"1px solid teal",width:"30%",display:"block",margin:"auto",marginTop:"3rem",textAlign:"center"}}>
          <Link to="/"><img src={single.image} alt="pic" style={{height:"400px",width:"100%"}}/></Link>
            <p>{single.brand}</p>
            <p>{single.gender}</p>
            <p>{single.description}</p>
            <p>{single.price}</p>
        </div>
    </div>
  )
}

export default SingleProductPage;
