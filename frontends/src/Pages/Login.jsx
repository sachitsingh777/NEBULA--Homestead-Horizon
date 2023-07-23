import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

const preventRefresh = (e) => {
  e.preventDefault();
};
const inititalstate={
  email:"",
  password:""
}

export default function Login() {
  const [form,setform]=useState(inititalstate)
  const toast = useToast();
  const navigate=useNavigate()
  const handleChange=(e)=>{
    const {name,value}=e.target
     setform({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`https://homestead3.onrender.com/hosts/login`,form)
    .then((res)=>{
      console.log(res.data)
      toast({
        title: "Login Successful",
        description: "You have successfully logged in!",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      localStorage.setItem("host",JSON.stringify(res.data))
    window.location = "/"
//     setTimeout(()=>{
//  navigate("/")
//     },2000)
    })
  }
  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Flex flexDirection={['column', 'row']} alignItems="center">
        <Box mb={[8, 0]} alignSelf={['center', 'flex-start']} h="600px">
          <img src="https://images.unsplash.com/photo-1689450026712-5d700960c49a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="illustration" style={{ height: "100%" }} />
        </Box>
        <Box p={8} rounded="md" boxShadow="lg" bg="white" w={['100%', '400px']}>
          <Heading textAlign="center" mb={4}>
            LOGIN
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel htmlFor="email">E-Mail</FormLabel>
              <Input type="email" id="email" placeholder="Enter your email" name="email" value={form.email} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password" value={form.password} onChange={handleChange}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              w="full"
             
            >
              Submit
            </Button>
          </form>
          <Text mt={4} textAlign="center">
            Don't have an account? <Link to="/signup">Sign In</Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
