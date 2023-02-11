import { Box, FormControl, FormLabel, Input,Button, Center, Heading} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/auth/action';

const Login = () => {
     const dispatch=useDispatch();
     const navigate=useNavigate();
     const location=useLocation();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    console.log(location);
    const userInfo={
        email,
        password
    }
 

    const handleSubmit=(e)=>{
       e.preventDefault();
       dispatch(login(userInfo)).then(()=>{
           navigate(location.state,{replace:true})
       })

       setEmail("")
       setPassword("")
      
    }

  return (
    <Box w="40%" m="auto"  boxShadow='lg'  rounded='md' bg='white' mt={10}>
        <form onSubmit={handleSubmit}>
            <Heading textAlign="center" pt={5}>Login</Heading>
             <FormControl>
                <Box w="90%" m="auto">
                   <FormLabel fontSize="1.5rem">Email</FormLabel>
                   <Input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </Box>
                <Box w="90%" m="auto" mt={5}>
                  <FormLabel fontSize="1.5rem">Password</FormLabel>
                  <Input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                </Box>
                 <Center>
                    <Button type="submit" colorScheme="blue" size="lg" mt={6} mb={6}>Login</Button>
                 </Center>
             </FormControl>
        </form>
      
    </Box>
  )
}

export default Login;
