import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, Stack, Input, Button, Heading, Flex } from "@chakra-ui/react";

const API_BASE_URL = "http://your_backend_api_url";

function Host() {
  const [hosts, setHosts] = useState([]);
  const [formData, setFormData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getHosts();
  }, []);

  const getHosts = async () => {
    // try {
    //   const response = await axios.get(`${API_BASE_URL}/api/hosts`);
    //   setHosts(response.data);
    // } catch (error) {
    //   console.error("Error fetching hosts", error);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, formData);
      console.log(response.data.message);
      // You can handle the registration success message here
    } catch (error) {
      console.error("Error registering host", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/hosts/${id}`);
      getHosts();
    } catch (error) {
      console.error("Error deleting host", error);
    }
  };

  return (
    <Box
      // backgroundImage="url(https://a0.muscache.com/im/pictures/ac2ac15d-73ea-472a-9776-e597e1fb34e0.jpg?im_w=720)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      backdropFilter="blur(30px)" // Apply the blur effect to the background
      py={8}
    >
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems="center"
        h="100vh"
        bg="transparent" // Set the background of the Flex container to transparent
      >
        <Box textAlign="center" fontSize="xl" bg="transparent" borderRadius="lg" boxShadow="lg" p={8}>
          <Heading mt={4}>Host Registration</Heading>
          <Box py={4}>
            <Stack spacing={4}>
              <Input name="name" placeholder="Name" onChange={handleChange} />
              <Input name="hostStatus" placeholder="Host Status" onChange={handleChange} />
              <Input name="location" placeholder="Location" onChange={handleChange} />
              <Input name="propertyType" placeholder="Property Type" onChange={handleChange} />
              <Input name="about" placeholder="About" onChange={handleChange} />
              <Input name="hostingSince" placeholder="Hosting Since" onChange={handleChange} />
              <Button colorScheme="teal" onClick={handleSubmit}>
                Register
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box mt={8} bg="rgba(255, 255, 255, 0.8)" borderRadius="lg" boxShadow="lg" p={8}>
          <Heading>All Hosts</Heading>
          <Stack spacing={4}>
            {hosts.map((host) => (
              <Box key={host.id} borderWidth="1px" borderRadius="lg" p={4}>
                <Text>Name: {host.name}</Text>
                <Text>Host Status: {host.hostStatus}</Text>
                <Text>Location: {host.location}</Text>
                <Text>Property Type: {host.propertyType}</Text>
                <Text>About: {host.about}</Text>
                <Text>Hosting Since: {host.hostingSince}</Text>
                <Button colorScheme="red" onClick={() => handleDelete(host.id)}>
                  Delete
                </Button>
              </Box>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Host;
