
import React, { useEffect } from 'react'
import { useState} from 'react';
import {useSearchParams} from "react-router-dom";
const Sidebar = () => {
  const[searchParams,setSearchParams]=useSearchParams();
  const initialState=searchParams.getAll("category");
  const initialOrder=searchParams.get("order"); 
  const[category,setCategory]=useState(initialState || [])
  const[order,setOrder]=useState(initialOrder || "");
 //["male","female","kids"]
//  console.log(category);
  const handleChange=(e)=>{
      let newCategory=[...category];
      let value=e.target.value;
      if(newCategory.includes(value)){
         newCategory.splice(newCategory.indexOf(value),1)
      }else{
        newCategory.push(value)
      }
      setCategory(newCategory);
  }

  useEffect(()=>{
     let params={
       category,
     }
     order && (params.order=order)
     setSearchParams(params);
  },[category,order])


  const handleSort=(e)=>{
   
    setOrder(e.target.value);
  }

  return (
    <div style={{width:"20%",height:"100vh",border:"1px solid teal"}}>
      <div style={{marginTop:"3rem"}}>
        <h1 style={{fontWeight:"bold",marginLeft:"30px"}}>Filter By</h1>
        <div style={{marginLeft:"30px"}}>
          <input type="checkbox"  value="male" onChange={handleChange} checked={category.includes("male")}/>
          <label style={{marginLeft:"20px",fontWeight:"bold"}}>Men</label>
        </div>
        <div style={{marginLeft:"30px"}}>
          <input type="checkbox" value="female" onChange={handleChange} checked={category.includes("female")}/>
          <label style={{marginLeft:"20px",fontWeight:"bold"}}>Women</label>
        </div>
        <div style={{marginLeft:"30px"}}>
          <input type="checkbox" value="kids" onChange={handleChange} checked={category.includes("kids")}/>
          <label style={{marginLeft:"20px",fontWeight:"bold"}}>Kids</label>
        </div>
        <h1 style={{fontWeight:"bold",marginTop:"2rem"}}>Sorting By</h1>
        {/* <div onChange={handleSort}>
           <input type="radio" name="order" value="asc" defaultChecked={order==="asc"}/>
          <label>Ascending</label>
          <input type="radio" name="order" value="desc" defaultChecked={order==="desc"}/>
          <label>Decending</label>
        </div> */}
        <select onChange={handleSort} value={order}>
           <option value="asc">Ascending</option>
           <option value="desc">Decending</option>
        </select>
      </div>
    </div>
  )
}

export default Sidebar;
