import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch, useSelector}from"react-redux";
import {useParams} from "react-router-dom";
import { editProduct } from '../Redux/product/action';
const EditProductPage = () => {
  const{id}=useParams();
  const[Edit,setEdit]=useState({});
  const dispatch=useDispatch();
  const productData=useSelector((store)=> {
    console.log(store)
     return store.product.products
  });

 console.log(Edit)
  useEffect(()=>{
     const data=productData.find((el)=> el.id===+id)
     console.log(data)
     let obj={
       brand:data.brand,
       price:data.price,
     }
     data && setEdit(obj)

  },[])

  const handleChange=(e)=>{
      const{name,value}=e.target;

      setEdit((prev)=>{
        return{...prev,[name]:name==="price"?+value:value}
      })
  }

  const handleEdit=()=>{
       dispatch(editProduct(id,Edit))
  }
  
  return (
    <Box w="40%" m="auto"  boxShadow='lg'  rounded='md' bg='white' mt={10}>
    
        <Heading textAlign="center" pt={5}>Edit product Details</Heading>
         <FormControl>
            <Box w="90%" m="auto">
               <FormLabel fontSize="1.5rem">Brand</FormLabel>
               <Input type='text' value={Edit.brand} placeholder="brand" name="brand" onChange={handleChange}/>
            </Box>
            <Box w="90%" m="auto" mt={5}>
              <FormLabel fontSize="1.5rem">Price</FormLabel>
              <Input type='number' value={Edit.price} placeholder="price" name="price" onChange={handleChange} />
            </Box>
             <Center>
                <Button colorScheme="blue" size="lg" mt={6} mb={6} onClick={handleEdit}>Save</Button>
             </Center>
         </FormControl>
  
  
</Box>
  )
}

export default EditProductPage;
