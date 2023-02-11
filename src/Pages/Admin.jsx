import React, { useState } from 'react';
import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addProduct} from '../Redux/product/action';
const initialState={
    image:"",
    brand:"",
    description:"",
    price:"",
    gender:"male",
}
const Admin = () => {
    const[form,setForm]=useState(initialState);
    const dispatch=useDispatch();
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addProduct(form))
        setForm(initialState);
    }

    const handleChange=(e)=>{
       const{name,value}=e.target;
       setForm((prev)=>{
         return {...prev,[name]:name==="price"?+value:value}
       })
    }

  return (
    <Box w="50%" m="auto" mt={10} boxShadow='outline'  rounded='md' bg='white'>
        <Heading textAlign={"center"} color="teal" pt={5}>Add Product</Heading>
        <form onSubmit={handleSubmit}>
        <FormControl mt={10}>
            <Box w="90%" margin={"auto"}>
               <FormLabel mt={5} fontSize="1.5rem">Image</FormLabel>
               <Input type='url' name="image" value={form.image} onChange={handleChange}/>
           </Box>
          <Box  w="90%" margin={"auto"}>
            <FormLabel mt={5} fontSize="1.5rem">Brand</FormLabel>
            <Input type='text' name="brand" value={form.brand} onChange={handleChange}/>
          </Box>
          <Box  w="90%" margin={"auto"}>
             <FormLabel mt={5} fontSize="1.5rem">Description</FormLabel>
             <Input type='text' name="description" value={form.description} onChange={handleChange}/>
          </Box>
          <Box  w="90%" margin={"auto"}>
            <FormLabel mt={5} fontSize="1.5rem">Price</FormLabel>
             <Input type='number' name="price" value={form.price} onChange={handleChange}/>
          </Box>
          <Box  w="90%" margin={"auto"} pb={3}>
             <FormLabel mt={5} fontSize="1.5rem">Gender</FormLabel>
              <RadioGroup value={form.gender} >
                <Stack direction='row'>
                <Radio value='male' name="gender" onChange={handleChange}>Male</Radio>
                <Radio value='female' name="gender" onChange={handleChange}>Female</Radio>
                <Radio value='kids' name="gender" onChange={handleChange}>Kids</Radio>
                </Stack>
             </RadioGroup>
          </Box>
          <Center>
            <Button type="submit" colorScheme='blue' mt={4} mb={4} size="lg">Add Product</Button>
          </Center>
          
         </FormControl>
        </form>
    </Box>
  )
}

export default Admin;
