import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
const inititalstate={
  email:"",
  password:"",
  name:"",
  image:""
}
export default function Signup() {
  const [form,setform]=useState(inititalstate)
  const handleChange=(e)=>{
    const {name,value}=e.target
     setform({...form,[name]:value})
  }
     
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`https://homestead3.onrender.com/hosts/register`,form)
    .then((res)=>{
      console.log(res.data)
      
    }).catch((error)=>console.log(error))
  }


  return (
    <Flex justifyContent="center" alignItems="center" flexDirection={["column", "row"]}>
      <Box mb={[8, 0]} alignSelf={['center', 'flex-start']} h="600px">
          <img src="https://images.unsplash.com/photo-1689450026712-5d700960c49a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="illustration" style={{ height: "100%" }} />
        </Box>
      <Box p={8} rounded="md" boxShadow="lg" bg="white" w={["100%", "400px"]}>
        <Heading textAlign="center" mb={4}>
          CREATE AN ACCOUNT
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input type="text" id="name" placeholder="Enter your name" name="name" value={form.name} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="email">E-Mail</FormLabel>
            <Input type="email" id="email" placeholder="Enter your email"  name="email" value={form.email} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="email">Profile Picture</FormLabel>
            <Input type="text" id="image" placeholder="Enter your Profile Image"  name="image" value={form.image} onChange={handleChange} />
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
          <Button type="submit" colorScheme="teal" size="lg" w="full" >
            Submit
          </Button>
          <Text align="center" mt={4} fontWeight="bold">
            OR
          </Text>
        </form>
        <Text mt={4}>
          Have an account? <Link to="/login">Login</Link>
        </Text>
      </Box>
    </Flex>
  );
}
